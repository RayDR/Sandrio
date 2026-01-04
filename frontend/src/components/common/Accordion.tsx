import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <motion.div key={item.id} className="border border-border rounded-lg overflow-hidden">
          <motion.button
            onClick={() => setExpanded(expanded === item.id ? null : item.id)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-neutral transition-colors"
          >
            <span className="font-semibold text-text">{item.title}</span>
            <motion.div
              animate={{ rotate: expanded === item.id ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} className="text-primary" />
            </motion.div>
          </motion.button>

          <motion.div
            initial={false}
            animate={{
              height: expanded === item.id ? 'auto' : 0,
              opacity: expanded === item.id ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-neutral text-text border-t border-border">
              {item.content}
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};
