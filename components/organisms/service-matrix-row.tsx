import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '@/content/services';
import { MonospaceBadge } from '@/components/ui/monospace-badge';

export interface ServiceMatrixRowProps {
  service: ServiceItem;
}

export function ServiceMatrixRow({ service }: ServiceMatrixRowProps) {
  return (
    <div className="group border-b border-border-hairline py-8 sm:py-10 transition-colors duration-150 hover:bg-canvas-subtle/50 px-4 sm:px-6 -mx-4 sm:-mx-6 rounded-lg">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Monospace Index (Col 1) */}
        <div className="lg:col-span-1">
          <span className="font-mono text-sm font-semibold text-content-tertiary group-hover:text-accent-blue transition-colors">
            {service.index}
          </span>
        </div>

        {/* Service Title & Scope (Col 2-6) */}
        <div className="lg:col-span-5 flex flex-col">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-content-primary group-hover:text-content-primary">
            {service.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-content-secondary leading-relaxed">
            {service.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-content-tertiary bg-white border border-border-hairline px-2 py-0.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables List (Col 7-10) */}
        <div className="lg:col-span-4 flex flex-col pt-1">
          <span className="font-mono text-[11px] uppercase tracking-wider text-content-tertiary mb-3 block">
            VERIFIABLE DELIVERABLES
          </span>
          <ul className="flex flex-col gap-2">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="text-xs sm:text-sm text-content-secondary flex items-start gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-accent-blue mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Link (Col 11-12) */}
        <div className="lg:col-span-2 flex lg:justify-end items-center pt-2">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-content-primary group-hover:text-accent-blue transition-colors min-h-[44px] py-2"
          >
            <span>Discuss Scope</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
