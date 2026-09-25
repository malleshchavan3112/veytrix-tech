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
    <div className="group border-b border-border-hairline py-8 sm:py-10 transition-all duration-200 hover:bg-veytrix-surface/60 hover:border-veytrix-cyan/30 px-5 sm:px-7 -mx-5 sm:-mx-7 rounded-xl relative overflow-hidden">
      {/* Subtle left active bar indicator on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-veytrix-blue to-veytrix-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Monospace Index (Col 1) */}
        <div className="lg:col-span-1">
          <span className="font-mono text-base font-bold text-content-tertiary group-hover:text-veytrix-electric transition-colors inline-block group-hover:translate-x-0.5">
            {service.index}
          </span>
        </div>

        {/* Service Title & Scope (Col 2-6) */}
        <div className="lg:col-span-5 flex flex-col">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-content-primary group-hover:text-veytrix-navy transition-colors">
            {service.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-content-secondary leading-relaxed">
            {service.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-content-tertiary bg-white border border-border-hairline px-2 py-0.5 rounded shadow-sm group-hover:border-veytrix-cyan/30 transition-colors"
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
                <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan mt-1.5 flex-shrink-0 group-hover:bg-veytrix-blue transition-colors" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Link (Col 11-12) */}
        <div className="lg:col-span-2 flex lg:justify-end items-center pt-2">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-content-primary group-hover:text-veytrix-blue transition-colors min-h-[44px] py-2"
          >
            <span>Discuss Scope</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-veytrix-blue" />
          </Link>
        </div>
      </div>
    </div>
  );
}
