import {
  Terminal,
  TerminalProps,
  PaymentStatus,
  ConnectionStatus,
} from './terminal';

export * from './terminal';

export interface StripeTerminal {
  create(props: TerminalProps): Terminal;
  PaymentStatus: PaymentStatus;
  ConnectionStatus: ConnectionStatus;
}

export const loadStripeTerminal: () => Promise<StripeTerminal | null>;

declare global {
  interface Window {
    // Terminal's sdk.js must be loaded directly from https://js.stripe.com/v3, which
    // places a `StripeTerminal` object on the window
    StripeTerminal?: StripeTerminal;
  }
}
