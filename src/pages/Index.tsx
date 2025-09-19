const Index = () => {
  return (
    <main className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-foreground">
            Ready to Build
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            Your clean canvas awaits. Start creating something beautiful.
          </p>
        </div>
        
        <div className="w-24 h-0.5 bg-gradient-primary mx-auto rounded-full opacity-50"></div>
        
        <div className="pt-4">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card shadow-soft">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Index;