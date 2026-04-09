import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-[680px] mx-auto"
    >
      <div className="bg-card rounded-2xl shadow-sm border border-border p-8 md:p-12 text-center">
        {/* Spinner */}
        <div className="flex justify-center mb-8">
          <div className="relative h-12 w-12">
            <div className="absolute inset-0 rounded-full border-2 border-muted" />
            <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        </div>

        <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">
          Generating your AI Health Check result…
        </h2>
        <p className="font-body text-base text-muted-foreground max-w-md mx-auto">
          We're turning your answers into a clear view of where your organisation stands and what to focus on next.
        </p>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
