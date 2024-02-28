"use client"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import {cn} from "@/lib/utils";
import React from "react";
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({className, title, children, ...props}, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

export function NavBar() {
    return <>
        <div className={"w-full flex items-center justify-between p-[20px] pl-[100px] pr-[100px]"}>
            <div className={"flex items-center gap-[30px]"}>
                <h1 className={"text-xl font-semibold mr-[20px]"}>Ecommerce</h1>

                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className={"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] "}>
                                    <ListItem
                                        title={"Sub Item 1 Title"}
                                        href={"/"}>
                                        Sub Item 1 Description
                                    </ListItem>
                                    <ListItem
                                        title={"Sub Item 2 Title"}
                                        href={"/"}>
                                        Sub Item 2 Description
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className={"grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] "}>
                                    <ListItem
                                        title={"Sub Item 1 Title"}
                                        href={"/"}>
                                        Sub Item 1 Description
                                    </ListItem>
                                    <ListItem
                                        title={"Sub Item 2 Title"}
                                        href={"/"}>
                                        Sub Item 2 Description
                                    </ListItem>
                                    <ListItem
                                        title={"Sub Item 3 Title"}
                                        href={"/"}>
                                        Sub Item 3 Description
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Link href="#" legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    Item Three
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            <div className={"flex items-center gap-[10px]"}>
                <Input type="Search" placeholder="Seach Placeholder"/>

                <Button>
                    Login
                </Button>
            </div>
        </div>
    </>
}