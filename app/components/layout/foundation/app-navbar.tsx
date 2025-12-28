import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "~/components/ui/sheet";
import { Button } from "~/components/ui/button";
import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "~/components/ui/navigation-menu";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect, useMemo, useCallback } from "react";
import { AppLogo } from "../../app-logo";

type LinkChild = {
  name: string;
  href: string;
};

type LinkItem = {
  name: string;
  href: string;
  type?: "multipart";
  description?: string;
  children?: LinkChild[];
};

type MobileNavigationItemProps = {
  item: LinkItem;
  isActive: (href: string) => boolean;
  onClose: () => void;
};

type DesktopNavigationItemProps = {
  item: LinkItem;
  isActive: (href: string) => boolean;
};

const items: LinkItem[] = [
  { name: "Dashboard", href: "/user/dashboard" },
  { name: "History", href: "/user/history" },
  {
    name: "Tools",
    href: "/app/tools/index",
    type: "multipart",
    description: "Access all your tools",
    children: [
      { name: "Website Auditor", href: "/user/tools/analyzer" },
      { name: "Builder: carbon.txt", href: "/user/tools/builders/carbon-txt" },
    ],
  },
  { name: "Settings", href: "/user/settings" },
];

const MobileNavigationItem = ({
  item,
  isActive,
  onClose,
}: MobileNavigationItemProps) => {
  if (item.type === "multipart") {
    return (
      <div className="space-y-2">
        <Link
          to={item.href}
          onClick={onClose}
          className={`group flex items-center justify-between w-full p-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
            isActive(item.href)
              ? "text-primary bg-primary/10"
              : "text-foreground hover:text-foreground hover:bg-muted"
          }`}
        >
          <div className="flex flex-col">
            <span>{item.name}</span>
            <span className="text-sm font-normal text-muted-foreground">
              {item.description}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </Link>
        {item.children && (
          <div className="ml-4 space-y-1 pl-4 border-l-2 border-border">
            {item.children.map((child: LinkChild) => (
              <Link
                key={child.name}
                to={child.href}
                onClick={onClose}
                className={`block p-2 px-4 text-lg font-semibold rounded-md transition-all duration-200 ${
                  isActive(child.href)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <Link
      to={item.href}
      onClick={onClose}
      className={`flex items-center w-full py-3 px-4 text-lg font-semibold rounded-lg transition-all duration-200 ${
        isActive(item.href)
          ? "text-primary bg-primary/10"
          : "text-foreground hover:text-foreground hover:bg-muted"
      }`}
    >
      {item.name}
    </Link>
  );
};

const DesktopNavigationItem = ({
  item,
  isActive,
}: DesktopNavigationItemProps) => {
  if (item.type === "multipart") {
    return (
      <NavigationMenuItem>
        <NavigationMenuTrigger
          className={`group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent px-4 py-2 text-lg font-semibold transition-all duration-200 hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-active:bg-muted/50 data-[state=open]:bg-muted/50 ${
            isActive(item.href) ? "text-primary" : "text-foreground"
          }`}
        >
          {item.name}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
          <div className="m-0 w-100 p-4 bg-background border border-border rounded-lg shadow-lg">
            <div className="mb-4 pb-4 border-b border-border">
              <NavigationMenuLink asChild>
                <Link
                  className="flex flex-col select-none rounded-lg bg-muted p-4 no-underline outline-none transition-all duration-200 hover:shadow-md focus:shadow-md hover:bg-muted/80"
                  to={item.href}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center">
                      <span className="text-primary-foreground font-bold text-xs">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <p className="text-lg font-bold text-foreground">
                      {item.name}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </div>
            <div className="grid gap-2">
              {item.children?.map((child: LinkChild) => (
                <NavigationMenuLink key={child.name} asChild>
                  <Link
                    className={`group block select-none rounded-lg p-3 leading-none no-underline outline-none transition-all duration-200 hover:bg-muted focus:bg-muted ${
                      isActive(child.href)
                        ? "bg-primary/10 text-primary"
                        : "hover:text-foreground focus:text-foreground"
                    }`}
                    to={child.href}
                  >
                    <div className="px-4 flex items-center justify-between">
                      <div
                        className={`text-lg font-semibold transition-colors ${
                          isActive(child.href)
                            ? "text-primary"
                            : "text-foreground group-hover:text-primary"
                        }`}
                      >
                        {child.name}
                      </div>
                      <ArrowRight
                        className={`h-3 w-3 transition-colors ${
                          isActive(child.href)
                            ? "text-primary"
                            : "text-muted-foreground group-hover:text-primary"
                        }`}
                      />
                    </div>
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem>
      <Link
        to={item.href}
        className={`group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-semibold transition-colors duration-200 hover:bg-muted hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
          isActive(item.href) ? "bg-muted text-primary" : "text-foreground"
        }`}
      >
        {item.name}
      </Link>
    </NavigationMenuItem>
  );
};

export function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = useCallback(
    (href: string): boolean => {
      return (
        location.pathname === href || location.pathname.startsWith(href + "/")
      );
    },
    [location.pathname]
  );

  const handleClose = useCallback((): void => {
    setIsOpen(false);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      const firstMenuItem = document.querySelector(
        '[role="menuitem"]'
      ) as HTMLElement;
      if (firstMenuItem) {
        firstMenuItem.focus();
      }
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, handleKeyDown]);

  const mobileNavigationItems = useMemo(
    () =>
      items.map((item) => (
        <MobileNavigationItem
          key={item.name}
          item={item}
          isActive={isActive}
          onClose={handleClose}
        />
      )),
    [isActive, handleClose]
  );

  const desktopNavigationItems = useMemo(
    () =>
      items.map((item) => (
        <DesktopNavigationItem
          key={item.name}
          item={item}
          isActive={isActive}
        />
      )),
    [isActive]
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background">
      <div className="flex h-16 max-w-7xl mx-auto items-center justify-between px-4 md:px-6 lg:px-8">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-muted transition-colors min-h-11 min-w-11"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-80 p-0 bg-background border-r border-border"
          >
            <SheetHeader className="sr-only">
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>Navigation items</SheetDescription>
            </SheetHeader>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 p-6 border-b border-border">
                <AppLogo to="/app/dashboard" />
              </div>

              <nav
                className="flex-1 p-6"
                role="navigation"
                aria-label="Mobile navigation"
              >
                <div className="space-y-2" role="menu">
                  {mobileNavigationItems}
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

        <AppLogo to="/app/dashboard" />

        <nav
          className="hidden lg:flex items-center"
          role="navigation"
          aria-label="Main navigation"
        >
          <NavigationMenu>
            <NavigationMenuList className="flex items-center gap-1">
              {desktopNavigationItems}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
    </header>
  );
}
