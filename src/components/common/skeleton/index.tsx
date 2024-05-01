import { Skeleton } from "primereact/skeleton";

export function SkeletonC() {
  return (
    <>
      <Skeleton width="25rem" height="8rem"></Skeleton>
      <Skeleton width="25rem" height="8rem"></Skeleton>
      <Skeleton width="25rem" height="8rem"></Skeleton>
      <Skeleton width="25rem" height="8rem"></Skeleton>
      <Skeleton width="25rem" height="8rem"></Skeleton>
      <Skeleton width="25rem" height="8rem"></Skeleton>
      <Skeleton width="25rem" height="8rem"></Skeleton>
      <Skeleton width="25rem" height="8rem"></Skeleton>
      <Skeleton width="25rem" height="8rem"></Skeleton>
    </>
  );
}

export function ImageSkeleton() {
  return <Skeleton width="50%" height="384px"></Skeleton>;
}
export function HeadingSkeleton() {
  return <Skeleton width="70%" height="3rem" className="mb-1"></Skeleton>;
}
export function JobSkeleton() {
  return <Skeleton width="40%" height="2rem" className="mb-10"></Skeleton>;
}
