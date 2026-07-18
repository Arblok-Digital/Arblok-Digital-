import { Component, type ReactNode } from "react";

interface Props { children: ReactNode }
interface State { hasError: boolean; error?: Error }

export default class ErrorBoundary extends Component<Props, State> {
  declare props: Props;
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-8">
          <div className="max-w-md text-center space-y-6">
            <div className="text-6xl">⚠️</div>
            <h1 className="font-display font-bold text-2xl text-white">
              Ada yang tidak beres
            </h1>
            <p className="font-sans text-slate-400 text-sm leading-relaxed">
              Sistem mengalami gangguan. Tim teknis kami sudah diberitahu.
              Silakan hubungi kami langsung via WhatsApp untuk bantuan cepat.
            </p>
            <a
              href="https://wa.me/6289508053795?text=Halo%20Arblok%20Digital%2C%20saya%20mengalami%20error%20di%20website.%20Tolong%20bantu%20saya."
              target="_blank"
              rel="noreferrer"
              className="inline-block font-display font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-3 rounded-xl transition-all"
            >
              Hubungi via WhatsApp
            </a>
            <button
              onClick={() => window.location.reload()}
              className="block mx-auto font-sans text-sm text-slate-500 hover:text-slate-300 bg-transparent border-none cursor-pointer mt-4"
            >
              Muat ulang halaman
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
