import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

export function Terminal({
  copy = false,
  readOnly,
  output,
  input,
  handleInputChange,
}) {
  const [terminalStep, setTerminalStep] = useState(0);
  const [copied, setCopied] = useState(false);
  const terminalSteps = [
    "git clone https://github.com/nextjs/saas-starter",
    "pnpm install",
    "pnpm db:setup",
    "pnpm db:migrate",
    "pnpm db:seed",
    "pnpm dev 🎉",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setTerminalStep((prev) =>
        prev < terminalSteps.length - 1 ? prev + 1 : prev
      );
    }, 500);

    return () => clearTimeout(timer);
  }, [terminalStep]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(terminalSteps.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-150 h-50 rounded-lg shadow-lg overflow-hidden bg-gray-900 text-white font-mono text-sm relative">
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          {copy && (
            <button
              onClick={copyToClipboard}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Copy to clipboard"
            >
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          )}
        </div>
        <div className="flex gap-2">
          <span className="text-green-400">$</span>
          <textarea
            value={input || output}
            onChange={handleInputChange}
            readOnly={readOnly}
          />
        </div>
      </div>
    </div>
  );
}
