import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

export const MarsCardSkeleton: React.FC = () => {
  return (
    <Card className="w-full shadow-lg animate-pulse">
      <CardHeader>
        <CardTitle>
          <Skeleton className="h-5 w-32 rounded" />
        </CardTitle>
      </CardHeader>
      <div className="p-2">
        <Skeleton className="w-full h-48 rounded-md" />
      </div>
      <CardContent className="flex flex-col gap-1">
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />
      </CardContent>
      <CardFooter>
        <Skeleton className="h-6 w-full rounded" />
      </CardFooter>
    </Card>
  );
};