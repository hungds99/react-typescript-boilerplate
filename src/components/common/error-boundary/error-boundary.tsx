export const ErrorBoundary = () => {
  return (
    <div className='flex h-screen w-full items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Something went wrong</h1>
        <p className='text-lg'>Please refresh the page or try again later</p>
      </div>
    </div>
  );
};
