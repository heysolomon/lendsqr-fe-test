const Loading = () => {
  return (
    <div className="flex h-screen items-center justify-center overflow-hidden">
      <div className="flex gap-2">
        <div className="h-5 w-5 animate-pulse rounded-full bg-secondary"></div>
        <div className="h-5 w-5 animate-pulse rounded-full bg-secondary"></div>
        <div className="h-5 w-5 animate-pulse rounded-full bg-secondary"></div>
      </div>
    </div>
  );
};

export default Loading;
