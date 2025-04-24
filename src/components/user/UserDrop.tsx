import React from "react";
import { User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const UserDrop = () => {
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
  <User className="h-5 w-5 text-gray-700 dark:text-white" />
</button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem>
          <a href="/signin" className="w-full block text-sm text-gray-700 dark:text-gray-100">
            Sign in
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <a href="/signup" className="w-full block text-sm text-gray-700 dark:text-gray-100">
            Sign up
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserDrop;
