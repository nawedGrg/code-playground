import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

interface CodeBlockProps {
  code: string;
  onTryIt?: () => void;
  showTryButton?: boolean;
}

const CodeBlock = ({ code, onTryIt, showTryButton = true }: CodeBlockProps) => {
  const { t } = useLanguage();

  // Simple syntax highlighting for display
  const highlightCode = (code: string) => {
    // Process in correct order to avoid replacing content inside HTML attributes
    let result = code;
    
    // First, highlight strings (before adding any HTML)
    result = result.replace(/(".*?"|'.*?'|`.*?`)/g, '§STRING§$1§/STRING§');
    
    // Then comments
    result = result.replace(/(\/\/.*)/g, '§COMMENT§$1§/COMMENT§');
    
    // Then keywords
    result = result.replace(/\b(let|const|var|function|if|else|for|return|document)\b/g, '§KEYWORD§$1§/KEYWORD§');
    
    // Then numbers
    result = result.replace(/\b(\d+)\b/g, '§NUMBER§$1§/NUMBER§');
    
    // Now convert placeholders to actual spans
    result = result
      .replace(/§STRING§/g, '<span class="code-string">')
      .replace(/§\/STRING§/g, '</span>')
      .replace(/§COMMENT§/g, '<span class="code-comment">')
      .replace(/§\/COMMENT§/g, '</span>')
      .replace(/§KEYWORD§/g, '<span class="code-keyword">')
      .replace(/§\/KEYWORD§/g, '</span>')
      .replace(/§NUMBER§/g, '<span class="code-number">')
      .replace(/§\/NUMBER§/g, '</span>');
    
    return result;
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
            {t("tryIt")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
