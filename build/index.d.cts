import React, { PropsWithChildren, JSX, FC } from 'react';
import { I18n } from '@lingui/core';

declare const useTranslate: () => ((key: string) => string);

declare const useLanguage: () => string;

interface LuwioInternationalizationI {
    getProvider({ children }: PropsWithChildren): JSX.Element;
    change(language: string, messages: Record<string, string>): void;
    t(key: string): string;
    tdate(value: Date, format?: Intl.DateTimeFormatOptions): string;
    tnumber(value: number, format?: Intl.NumberFormatOptions): string;
    current(): string;
}
interface InternationalizationConfigI {
    i18n: I18n;
    load: (language: string) => Promise<Record<string, string>>;
    initialLanguage: string;
}

declare const useInternationalization: () => LuwioInternationalizationI;

interface InternationalizationProps extends PropsWithChildren {
    initialLanguage: string;
    loadMessages: (language: string) => Promise<Record<string, string>>;
}
declare const InternationalizationProvider: FC<InternationalizationProps>;

declare class LuwioInternationalization implements LuwioInternationalizationI {
    private readonly _internationalization;
    private readonly _load;
    constructor(config: InternationalizationConfigI);
    private load;
    current(): string;
    change(language: string): void;
    t(key: string): string;
    tdate(value: Date, format?: Intl.DateTimeFormatOptions): string;
    tnumber(value: number, format?: Intl.DateTimeFormatOptions): string;
    getProvider({ children }: PropsWithChildren): React.JSX.Element;
}

export { type InternationalizationConfigI, type InternationalizationProps, InternationalizationProvider, LuwioInternationalization, type LuwioInternationalizationI, useInternationalization, useLanguage, useTranslate };