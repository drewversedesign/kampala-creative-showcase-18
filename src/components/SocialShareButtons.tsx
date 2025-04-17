
import React from 'react';
import { Share2, Facebook, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/sonner';

interface SocialShareButtonsProps {
  title: string;
  description: string;
  className?: string;
}

export function SocialShareButtons({ title, description, className }: SocialShareButtonsProps) {
  const [copied, setCopied] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  
  const toggleShare = () => {
    setIsOpen(!isOpen);
  };
  
  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      toast.success('Link copied to clipboard');
      
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      toast.error('Failed to copy link');
    }
  };
  
  const shareLinks = [
    {
      name: 'Facebook',
      icon: <Facebook size={18} />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}&quote=${encodedDescription}`,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      url: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${encodedTitle}`,
      color: 'bg-sky-500 hover:bg-sky-600'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={18} />,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
      color: 'bg-blue-800 hover:bg-blue-900'
    }
  ];
  
  return (
    <div className={cn("relative", className)}>
      <button 
        onClick={toggleShare}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all"
        aria-label="Share this post"
      >
        <Share2 size={16} strokeWidth={2.5} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 p-2 bg-gray-800 shadow-xl rounded-lg backdrop-blur-sm border border-gray-700 z-50 animate-scale-in">
          <div className="flex flex-col gap-2">
            {shareLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md text-white text-sm transition-colors",
                  link.color
                )}
                aria-label={`Share on ${link.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
              >
                {link.icon}
                <span className="whitespace-nowrap">{link.name}</span>
              </a>
            ))}
            
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopyLink();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white text-sm transition-colors"
              aria-label="Copy link"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              <span className="whitespace-nowrap">Copy link</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
