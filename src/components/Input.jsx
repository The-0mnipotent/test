import React, { useState } from "react";
import "./Input.css";

function Input() {
  const [copied, setCopied] = useState([false, false]);

  const handleCopy = (sampleIndex, sampleText) => {
    navigator.clipboard
      .writeText(sampleText)
      .then(() => {
        const newCopied = [...copied];
        newCopied[sampleIndex] = true;
        setCopied(newCopied);
        setTimeout(() => {
          const resetCopied = [...copied];
          resetCopied[sampleIndex] = false;
          setCopied(resetCopied);
        }, 2000); // Reset copied state after 2 seconds
      })
      .catch((error) => {
        console.error("Failed to copy: ", error);
      });
  };

  return (
    <div className="input-section">
      <div className="intro">
        This web server takes fasta sequences of two proteins and predicts pairs
        of interacting residues between them. The input is a pair of amino acid
        sequences in the fasta format.
      </div>

      <div className="warning">
        Sequence size for each protein is limited to 300 residues. Longer
        sequences added will be truncated to this length.
      </div>

      <h2>Enter Sequences:</h2>

      <div className="input">
        <textarea placeholder="Enter text"></textarea>
        <textarea placeholder="Enter text"></textarea>
      </div>

      <button className="submit-button">Submit</button>

      <div className="test-sequence-section">
        <div className="title">Test Sequence</div>
        <div className="description">
          Copy and paste full or part of the following sequences into the text
          boxes above and press the predict button to test this web server.
        </div>

        <div className="samples">
          <div className="sample">
            <h3>Sequence 1</h3>
            DVSGTVCLSALPPEATDTLNLIASDGPFPYSQDGVV
            FQNRESVLPTQSYGYYHEYTVITPGARTRGTRRIIT GEATQEDYYTGDHYATFSLIDQTC
            <button
              className="copy-button"
              onClick={() =>
                handleCopy(
                  0,
                  "DVSGTVCLSALPPEATDTLNLIASDGPFPYSQDGVV FQNRESVLPTQSYGYYHEYTVITPGARTRGTRRIIT GEATQEDYYTGDHYATFSLIDQTC"
                )
              }
            >
              {copied[0] ? "Copied to Clipboard" : "Copy"}
            </button>
          </div>
          <div className="sample">
            <h3>Sequence 2</h3>
            KKAVINGEQIRSISDLHQTLKKELALPEYYGENLDA
            LWDCLTGWVEYPLVLEWRQFEQSKQLTENGAESVL VFREAKAEGCDITIILS
            <button
              className="copy-button"
              onClick={() =>
                handleCopy(
                  1,
                  "KKAVINGEQIRSISDLHQTLKKELALPEYYGENLDA LWDCLTGWVEYPLVLEWRQFEQSKQLTENGAESVL VFREAKAEGCDITIILS"
                )
              }
            >
              {copied[1] ? "Copied to Clipboard" : "Copy"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
