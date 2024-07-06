"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

function PDFViewer({ children }) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[700px] xl:max-w-[1000px] xl:min-h-[700px] lg:min-h-[500] min-h-[400px] m-3 ">
        <DialogHeader>
          <DialogTitle className="text-accent">Abhishek Manoharan</DialogTitle>
          <DialogDescription className="w-full h-full min-h-full p-3">
            <iframe width="100%" height="100%" src="/test.pdf#zoom=80" />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default PDFViewer;
