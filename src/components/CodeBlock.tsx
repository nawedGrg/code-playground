import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CodeBlockProps {
  code: string;
  onTryIt?: () => void;
  showTryButton?: boolean;
}

const CodeBlock = ({ code, onTryIt, showTryButton = true }: CodeBlockProps) => {
  // Simple syntax highlighting for display
  const highlightCode = (code: string) => {
    return code
      .replace(/(\/\/.*)/g, '<span class="code-comment">$1</span>')
      .replace(/\b(let|const|var|function|if|else|for|return|document)\b/g, '<span class="code-keyword">$1</span>')
      .replace(/(".*?"|'.*?'|`.*?`)/g, '<span class="code-string">$1</span>')
      .replace(/\b(\d+)\b/g, '<span class="code-number">$1</span>');
  };

  return (
    <div className="relative">
      <pre 
        className="code-block text-sm leading-relaxed overflow-x-auto"
        dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
      />
      {showTryButton && onTryIt && (
        <div className="mt-4 flex justify-end">
          <Button variant="tryIt" size="lg" onClick={onTryIt}>
            <Play className="w-4 h-4" />
            Try it!
          </Button>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
