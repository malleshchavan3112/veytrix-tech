import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '@/content/services';

export interface ServiceMatrixRowProps {
  service: ServiceItem;
}

export function ServiceMatrixRow({ service }: ServiceMatrixRowProps) {
  return (
    <div className="service-matrix-row group border-b border-border-hairline py-8 sm:py-10 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-veytrix-surface/75 hover:border-veytrix-cyan/40 px-5 sm:px-7 -mx-5 sm:-mx-7 rounded-xl relative overflow-hidden">
      {/* Dynamic left gradient active indicator line on hover */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-veytrix-blue via-veytrix-cyan to-veytrix-teal opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-1 group-hover:translate-x-0" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Monospace Index (Col 1) */}
        <div className="lg:col-span-1">
          <span className="font-mono text-base font-bold text-content-tertiary group-hover:text-veytrix-electric transition-all duration-300 inline-block group-hover:translate-x-1">
            {service.index}
          </span>
        </div>

        {/* Service Title & Scope (Col 2-6) */}
        <div className="lg:col-span-5 flex flex-col">
          <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-content-primary group-hover:text-veytrix-navy transition-colors duration-200">
            {service.title}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-content-secondary leading-relaxed transition-colors duration-200">
            {service.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] text-content-tertiary bg-white border border-border-hairline px-2.5 py-0.5 rounded shadow-xs group-hover:border-veytrix-cyan/40 group-hover:text-slate-800 transition-colors duration-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Deliverables List (Col 7-10) */}
        <div className="lg:col-span-4 flex flex-col pt-1">
          <span className="font-mono text-[11px] uppercase tracking-wider text-content-tertiary mb-3 block group-hover:text-veytrix-navy transition-colors duration-200">
            VERIFIABLE DELIVERABLES
          </span>
          <ul className="flex flex-col gap-2">
            {service.deliverables.map((item) => (
              <li
                key={item}
                className="text-xs sm:text-sm text-content-secondary flex items-start gap-2 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-veytrix-cyan mt-1.5 flex-shrink-0 group-hover:bg-veytrix-blue group-hover:scale-125 transition-all duration-200" />
                <span className="group-hover:text-slate-900 transition-colors duration-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Link (Col 11-12) */}
        <div className="lg:col-span-2 flex lg:justify-end items-center pt-2">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-content-primary group-hover:text-veytrix-blue transition-all duration-200 min-h-[44px] py-2"
          >
            <span>Discuss Scope</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 text-veytrix-blue" />
          </Link>
        </div>
      </div>
    </div>
  );
}
