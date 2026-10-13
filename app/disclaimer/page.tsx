import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Educational Disclaimer",
  description: "Important information about the educational nature and risks of trading-related content."
};

export default function DisclaimerPage() {
  return (
    <main className="container prose-page">
      <span className="eyebrow">Please read</span>
      <h1>Educational disclaimer.</h1>
      <p>Trading Vlogs publishes general educational information about financial markets, trading concepts, and risk management. The content is provided for informational and educational purposes only.</p>
      <h2>Not financial advice</h2>
      <p>Nothing on this website should be treated as individualized investment, legal, tax, or financial advice, or as a recommendation to buy, sell, or hold a security or other financial product. Consider your own circumstances and consult a suitably qualified professional where appropriate.</p>
      <h2>Risk of loss</h2>
      <p>Trading and investing involve risk. Prices can move unpredictably, past performance does not guarantee future results, and you may lose some or all of the money you put at risk. Leverage can increase losses. Stops and risk estimates do not guarantee an execution price or limit every possible loss.</p>
      <h2>Accuracy and timeliness</h2>
      <p>We aim to explain concepts clearly, but information may be incomplete, change over time, or contain errors. Verify time-sensitive facts and market information through reliable, current sources before relying on them.</p>
      <h2>Personal responsibility</h2>
      <p>You are responsible for your own research and decisions. Reading this website does not create an adviser-client relationship.</p>
    </main>
  );
}