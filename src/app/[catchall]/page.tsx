
const CatchallPage = async ({ params }: { params: Promise<{ catchall: string }> }) => {
  const { catchall } = await params;

  return (
    <div className="min-h-screen p-8 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Catchall Page</h1>
      <p className="text-lg">
            Dynamic slug value: <span className="font-mono px-2 py-1 rounded">{catchall}</span>
      </p>
    </div>
  );
};

export default CatchallPage;