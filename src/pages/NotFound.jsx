import { DangerButton } from "@/components/ui/DangerButton";

export const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-muted-foreground mb-8">Oops! The page you're looking for doesn't exist.</p>

      <DangerButton />
    </div>
  );
};
