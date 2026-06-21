import { Component, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: { componentStack: string } | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: { componentStack: string }) {
    console.error('[Error Boundary Caught]', error);
    console.error('[Component Stack]', errorInfo.componentStack);
    this.setState({ errorInfo });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen w-full flex items-center justify-center bg-red-50 p-4">
          <div className="max-w-md w-full border-2 border-red-400 bg-white rounded-lg p-6 shadow-lg">
            <div className="text-center">
              <div className="text-5xl mb-4 text-red-600">⚠️</div>
              <h1 className="text-2xl font-bold text-red-900 mb-2 font-playfair">
                Oops! Something went wrong
              </h1>
              <p className="text-neutral-700 text-sm mb-4 font-cascadia">
                An unexpected error has occurred. Please try refreshing the page or contact support if the problem persists.
              </p>

              {typeof import.meta.env !== 'undefined' && import.meta.env.DEV && this.state.error && (
                <div className="mb-6 text-left bg-neutral-100 border border-neutral-300 rounded p-3">
                  <details className="cursor-pointer">
                    <summary className="font-bold text-sm text-neutral-700 hover:text-neutral-900">
                      Error Details (Development Only)
                    </summary>
                    <pre className="text-xs mt-2 whitespace-pre-wrap break-words text-neutral-600 font-cascadia max-h-48 overflow-auto">
                      {this.state.error.toString()}
                      {'\n\n'}
                      {this.state.errorInfo?.componentStack}
                    </pre>
                  </details>
                </div>
              )}

              <div className="flex gap-3 justify-center">
                <button
                  onClick={this.handleReset}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded transition-colors"
                >
                  Try Again
                </button>
                <button
                  onClick={() => (window.location.href = '/')}
                  className="border border-red-400 text-red-600 hover:bg-red-50 font-semibold px-4 py-2 rounded transition-colors"
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
