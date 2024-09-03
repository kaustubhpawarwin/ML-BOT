import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProfileEditSheet from "./ProfileEditSheet"
  
 function AlertDialogDemo() {
    return (
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button >Start Now</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Continue With out Log In ?</AlertDialogTitle>
            <AlertDialogDescription>
              You can log in to keep your chats
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>
               
            Cancel
            </AlertDialogCancel>
            <Link href="/bot"><AlertDialogAction>Continue Without Log In</AlertDialogAction></Link>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  export default AlertDialogDemo