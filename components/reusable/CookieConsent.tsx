"use client";

import * as React from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface CookieConsentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "small" | "mini";
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
  description?: string;
  learnMoreHref?: string;
}

const CookieConsent = React.forwardRef<HTMLDivElement, CookieConsentProps>(
  (
    {
      variant = "default",
      demo = false,
      onAcceptCallback = () => {},
      onDeclineCallback = () => {},
      className,
      description =
        "We use cookies to improve your experience, analyze site usage, and help manage enquiries submitted through our contact forms. Learn how we protect your information in our Privacy Policy.",
      learnMoreHref = "/privacy",
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hide, setHide] = React.useState(false);
    const acceptButtonClasses =
      "flex-1 bg-app hover:bg-app/90 transition-all duration-300";
    const declineButtonClasses =
      "flex-1 bg-app-bg text-slate-800 hover:bg-app-bg/80 transition-all duration-300";

    const handleAccept = React.useCallback(() => {
      setIsOpen(false);
      document.cookie =
        "cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
      setTimeout(() => {
        setHide(true);
      }, 700);
      onAcceptCallback();
    }, [onAcceptCallback]);

    const handleDecline = React.useCallback(() => {
      setIsOpen(false);
      setTimeout(() => {
        setHide(true);
      }, 700);
      onDeclineCallback();
    }, [onDeclineCallback]);

    React.useEffect(() => {
      try {
        setIsOpen(true);
        if (document.cookie.includes("cookieConsent=true") && !demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      } catch (error) {
        console.warn("Cookie consent error:", error);
      }
    }, [demo]);

    if (hide) return null;

    const containerClasses = cn(
      "fixed z-50 transition-all duration-700",
      !isOpen ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
      className,
    );

    const commonWrapperProps = {
      ref,
      className: cn(
        containerClasses,
        variant === "mini"
          ? "left-0 right-0 sm:left-4 bottom-4 w-full sm:max-w-3xl"
          : "bottom-0 left-0 right-0 sm:left-4 sm:bottom-4 w-full sm:max-w-md",
      ),
      ...props,
    };

    if (variant === "default") {
      return (
        <div {...commonWrapperProps}>
          <Card className="m-3 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-lg">We use cookies</CardTitle>
              <Cookie className="h-5 w-5" />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardDescription className="text-sm">
                {description}
              </CardDescription>
              <p className="text-xs text-muted-foreground">
                By clicking <span className="font-medium">&quot;Accept&quot;</span>, you
                agree to our use of cookies.
              </p>
              <Link
                href={learnMoreHref}
                className="text-xs text-primary underline underline-offset-4 hover:no-underline"
              >
                Learn more
              </Link>
            </CardContent>
            <CardFooter className="flex gap-2 pt-2">
              <Button
                onClick={handleDecline}
                variant="secondary"
                className={declineButtonClasses}
              >
                Decline
              </Button>
              <Button onClick={handleAccept} className={acceptButtonClasses}>
                Accept
              </Button>
            </CardFooter>
          </Card>
        </div>
      );
    }

    if (variant === "small") {
      return (
        <div {...commonWrapperProps}>
          <Card className="m-3 shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 h-0 px-4">
              <CardTitle className="text-base">We use cookies</CardTitle>
              <Cookie className="h-4 w-4" />
            </CardHeader>
            <CardContent className="pt-0 pb-2 px-4">
              <CardDescription className="text-sm">
                {description}
              </CardDescription>
            </CardContent>
            <CardFooter className="flex gap-2 h-0 py-2 px-4">
              <Button
                onClick={handleDecline}
                variant="secondary"
                size="sm"
                className={`${declineButtonClasses} rounded-full`}
              >
                Decline
              </Button>
              <Button
                onClick={handleAccept}
                size="sm"
                className={`${acceptButtonClasses} rounded-full`}
              >
                Accept
              </Button>
            </CardFooter>
          </Card>
        </div>
      );
    }

    if (variant === "mini") {
      return (
        <div {...commonWrapperProps}>
          <Card className="mx-3 p-0 py-3 shadow-lg">
            <CardContent className="sm:flex grid gap-4 p-0 px-3.5">
              <CardDescription className="text-xs sm:text-sm flex-1">
                {description}
              </CardDescription>
              <div className="flex items-center gap-2 justify-end sm:gap-3">
                <Button
                  onClick={handleDecline}
                  size="sm"
                  variant="secondary"
                  className={`${declineButtonClasses} text-xs h-7`}
                >
                  Decline
                  <span className="sr-only sm:hidden">Decline</span>
                </Button>
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className={`${acceptButtonClasses} text-xs h-7`}
                >
                  Accept
                  <span className="sr-only sm:hidden">Accept</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return null;
  },
);

CookieConsent.displayName = "CookieConsent";
export { CookieConsent };
export default CookieConsent;
