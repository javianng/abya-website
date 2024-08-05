import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
} from "./ui/alert-dialog";
// import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

interface EventAlertDialogProps {
  show: boolean;
  onClose: () => void;
}

const EventAlertDialog: React.FC<EventAlertDialogProps> = ({
  show,
  onClose,
}) => {
  return (
    <AlertDialog open={show} onOpenChange={onClose}>
      <AlertDialogContent>
        <AlertDialogTitle>
          <h1 className="heading3 w-fit bg-brandYellow p-3">
            Event Coming Up!
          </h1>
        </AlertDialogTitle>
        <AlertDialogDescription>
          <div className="flex flex-col gap-4">
            <p>
              Join us for our upcoming event - ABYA Connect - and learn more
              about Vietnam!
            </p>
            <div className="flex overflow-scroll">
              <></>
            </div>
          </div>
        </AlertDialogDescription>
        <div className="flex justify-end space-x-2">
          <AlertDialogCancel asChild>
            <Button className="bg-red-500 font-bold text-neutral-50 hover:bg-red-500/90">
              Not Keen
            </Button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <Button className="bg-brandBlue font-bold text-white hover:bg-brandBlue-80">
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSc0iUpkluI5OOY8-zahEVAX9uChq5Vtmu-sVli47zS4nVSxhQ/viewform"
                }
              >
                Join Now
              </Link>
            </Button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default EventAlertDialog;
