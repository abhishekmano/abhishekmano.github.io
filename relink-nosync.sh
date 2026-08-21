#!/usr/bin/env bash
# Keep heavy build/dependency directories out of iCloud sync.
#
# iCloud Drive will not sync anything whose name ends in ".nosync" — Finder
# reports such items as "Ineligible". So the real directory lives at
# <name>.nosync and <name> is a symlink pointing at it. Tools that write
# through the symlink (npm, pnpm, next, cargo) don't notice the difference.
#
# Idempotent: safe to re-run any time. Wire it into package.json as `predev`,
# `prebuild` and `postinstall`, because npm and npx both replace a symlinked
# node_modules with a real directory — and once that happens iCloud starts
# ingesting tens of thousands of files and generating "node_modules 2"
# conflict copies.
#
# Usage:
#   ./relink-nosync.sh                      # auto-detect what's present
#   ./relink-nosync.sh node_modules .next   # explicit list
#   NOSYNC_DIRS="target vendor" ./relink-nosync.sh
#
# Auto-detect only touches directories that already exist, so it never litters
# a project with empty folders for tools it doesn't use. The one exception is
# node_modules, which is created up front when a package.json is present
# because npm is about to make it anyway.

set -euo pipefail

cd "$(dirname "$0")"

# This only has a job to do inside iCloud Drive. On CI (GitHub Actions) or any
# clone outside iCloud, symlinking build output is pointless and would put a
# symlink in the path of actions/upload-pages-artifact, so bail out early and
# leave real directories alone.
if [[ -n "${CI:-}" ]] || [[ "$PWD" != *"/Library/Mobile Documents/"* ]]; then
  echo "not inside iCloud Drive (or running on CI) -- nothing to do"
  exit 0
fi

# Common heavy, regenerable directories across ecosystems.
CANDIDATES=(
  node_modules .next .nuxt .svelte-kit dist build out
  .turbo .vite .cache .parcel-cache .angular .astro
  coverage .nyc_output
  .venv __pycache__ .tox .mypy_cache .pytest_cache .ruff_cache
  target vendor Pods DerivedData .gradle
)

if [[ $# -gt 0 ]]; then
  DIRS=("$@")
elif [[ -n "${NOSYNC_DIRS:-}" ]]; then
  read -r -a DIRS <<< "$NOSYNC_DIRS"
else
  DIRS=()
  # npm will create node_modules regardless, so get ahead of it.
  [[ -f package.json ]] && DIRS+=(node_modules)
  for candidate in "${CANDIDATES[@]}"; do
    [[ "$candidate" == "node_modules" ]] && continue
    if [[ -e "$candidate" || -e "${candidate}.nosync" ]]; then
      DIRS+=("$candidate")
    fi
  done
fi

if [[ ${#DIRS[@]} -eq 0 ]]; then
  echo "nothing to link (no known build directories present)"
else
  for name in "${DIRS[@]}"; do
    target="${name}.nosync"

    # Already a correct symlink -> nothing to do.
    if [[ -L "$name" && "$(readlink "$name")" == "$target" ]]; then
      [[ -d "$target" ]] || mkdir -p "$target"
      continue
    fi

    # A stale symlink pointing somewhere else.
    if [[ -L "$name" ]]; then
      rm "$name"
    # A real directory a tool recreated -> move it into .nosync.
    elif [[ -d "$name" ]]; then
      # The real directory is always the authoritative one: npm/next just wrote
      # it. Replace .nosync wholesale rather than merging entry-by-entry --
      # `mv -f src/* dst/` cannot overwrite existing non-empty subdirectories,
      # so a merge silently keeps stale packages and then deletes the fresh
      # ones. Everything here is regenerable, so clobbering is safe.
      if [[ -n "$(ls -A "$name")" ]]; then
        rm -rf "$target"
        mv "$name" "$target"
      else
        # Freshly created and empty -> nothing worth keeping.
        rmdir "$name"
        mkdir -p "$target"
      fi
    elif [[ -e "$name" ]]; then
      echo "warn: $name exists and is not a directory, skipping" >&2
      continue
    fi

    mkdir -p "$target"
    ln -s "$target" "$name"
    echo "linked $name -> $target"
  done
fi

# iCloud conflict copies ("node_modules 2", "node_modules 3") are pure waste.
shopt -s nullglob
for junk in *" "[0-9] *" "[0-9][0-9]; do
  rm -rf "$junk"
  echo "removed iCloud conflict copy: $junk"
done
rm -f .DS_Store
shopt -u nullglob

echo "done."
