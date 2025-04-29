import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PlusIcon } from "lucide-react";

export const CreateChannel = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="w-12 h-12 flex justify-center items-center rounded-xl bg-gray-600">
                    <PlusIcon />
                </div>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create Your Server</DialogTitle>
                </DialogHeader>
                <DialogFooter>
                    <Button>
                        Create
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}