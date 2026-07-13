"use client";

import { useState } from "react";

const trajectoryStates = [
  {
    id: "ordered",
    step: "01",
    condition: "KINASE-ACTIVE",
    title: "Ordered amyloid rods",
    copy: "RIPK1 adopts a radially compact architecture around the RHIM core. This ordered scaffold supports a locally concentrated RIPK3–MLKL signaling environment.",
    signal: "SIGNALING-COMPETENT",
  },
  {
    id: "branched",
    step: "02",
    condition: "KINASE-INHIBITED · EARLY",
    title: "Branched intermediates",
    copy: "Radial loosening increases access to the RIPK1 death domain. DD-mediated contacts cross-link rods at branch junctions, where FADD is preferentially enriched.",
    signal: "DESTABILIZED",
  },
  {
    id: "disordered",
    step: "03",
    condition: "KINASE-INHIBITED · LATE",
    title: "Collapsed assemblies",
    copy: "Continued remodeling produces enlarged, structurally disordered assemblies. Molecular recruitment persists, but productive signal transmission is lost.",
    signal: "SIGNALING-INCOMPETENT",
  },
  {
    id: "restored",
    step: "04",
    condition: "KINASE RESTORED",
    title: "Ordered features re-emerge",
    copy: "After Nec-1s withdrawal, pRIPK1-positive rod-like elements extend from the disordered scaffold, demonstrating that the architectural switch is reversible.",
    signal: "REACTIVATED",
  },
];

function StateGraphic({ state }: { state: string }) {
  return (
    <div className={`state-graphic state-${state}`} aria-hidden="true">
      <div className="state-glow" />
      <div className="rod rod-a" /><div className="rod rod-b" /><div className="rod rod-c" />
      <div className="branch branch-a" /><div className="branch branch-b" /><div className="branch branch-c" />
      <div className="cloud cloud-a" /><div className="cloud cloud-b" /><div className="cloud cloud-c" />
      <i className="hotspot h1" /><i className="hotspot h2" /><i className="hotspot h3" />
    </div>
  );
}

export default function Home() {
  const [activeState, setActiveState] = useState(0);
  const current = trajectoryStates[activeState];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#overview" aria-label="RIPK1 necrosome study home">
          <span className="brand-mark" aria-hidden="true" />
          <span>STRUCTURAL CELL DEATH BIOLOGY</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#architecture">Architecture</a>
          <a href="#trajectory">Structural trajectory</a>
          <a href="#hotspots">Functional hotspots</a>
          <a href="#model">Working model</a>
        </nav>
      </header>

      <section className="hero" id="overview">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/ripk1-hero-poster.jpg"
          aria-label="Time-lapse microscopy of RIPK1 necrosome dynamics"
        >
          <source src="/ripk1-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">RIPK1 · NECROSOME ARCHITECTURE</p>
          <h1>Kinase activity<br />reshapes the necrosome.</h1>
          <p className="hero-copy">
            From ordered amyloid rods to branched, disordered assemblies—revealing how
            a nanoscale structural transition determines RIPK3–MLKL signal output.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#trajectory">Explore the trajectory <span>↘</span></a>
            <a className="text-link" href="#finding">Read the central finding <span>→</span></a>
          </div>
        </div>

        <div className="hero-rail" aria-label="Study methods and sections">
          <div className="method-lockup">
            <span className="localization-icon" aria-hidden="true"><i /><i /><i /><i /><i /></span>
            <p><strong>SMLM</strong><span>ExM</span><span>qSMLM</span></p>
          </div>
          <a href="#architecture"><b>01</b><span>In situ<br />architecture</span></a>
          <a href="#trajectory"><b>02</b><span>Structural<br />trajectory</span></a>
          <a href="#hotspots"><b>03</b><span>Functional<br />hotspots</span></a>
          <a href="#model"><b>04</b><span>Working<br />model</span></a>
        </div>

        <div className="scale-bar" aria-hidden="true"><span /></div>
      </section>

      <section className="finding" id="finding">
        <div>
          <p className="section-index">THE CENTRAL FINDING / 01</p>
          <h2>Assembly is preserved.<br />Signaling competence is not.</h2>
        </div>
        <p>
          Loss of RIPK1 kinase activity still permits RHIM-mediated amyloidogenesis,
          but relaxes the radial organization of RIPK1. The resulting assemblies lose
          the dense RIPK3–MLKL hotspots required for productive necroptotic execution.
        </p>
      </section>

      <section className="question-grid">
        <article>
          <span>01 / THE GAP</span>
          <h3>No definitive substrate</h3>
          <p>RIPK1 kinase activity is essential for necroptosis, yet a downstream substrate that explains this function remains undefined.</p>
        </article>
        <article>
          <span>02 / THE STRUCTURAL ANSWER</span>
          <h3>An allosteric checkpoint</h3>
          <p>Kinase activity maintains a compact supramolecular state of RIPK1 independently of conventional substrate phosphorylation.</p>
        </article>
        <article>
          <span>03 / THE CONSEQUENCE</span>
          <h3>Architecture licenses output</h3>
          <p>Radial compaction concentrates RIPK3 and MLKL into high-density functional hotspots that enable necroptotic execution.</p>
        </article>
      </section>

      <section className="architecture-section" id="architecture">
        <div className="section-heading">
          <p className="section-index">IN SITU ARCHITECTURE / 02</p>
          <h2>AmyloMap resolves full-length RIPK1 at sub-molecular scale.</h2>
          <p>Low-linkage-error SMLM defines radial domain positioning; ExM resolves ordered axial periodicity directly in cells.</p>
        </div>
        <div className="architecture-layout">
          <figure className="paper-figure">
            <img src="/figure-1-dark.webp" width="1800" height="2044" loading="lazy" decoding="async" alt="Figure 1 showing AmyloMap analysis of full-length RIPK1 amyloid architecture" />
            <figcaption><span>FIGURE 1</span> RHIM-centered core with radially distributed death and kinase domains.</figcaption>
          </figure>
          <div className="metric-stack">
            <div><strong>50.20 ± 1.70 nm</strong><span>N-terminal apparent diameter of RIPK1-FL</span></div>
            <div><strong>23.31 ± 1.10 nm</strong><span>C-terminal apparent diameter of RIPK1-FL</span></div>
            <div><strong>36.56 ± 0.96 nm</strong><span>Axial pitch of full-length RIPK1 assemblies</span></div>
            <div className="domain-order">
              <p>RADIAL ORGANIZATION</p>
              <ol><li><i className="rh-core" />RHIM core</li><li><i className="dd-layer" />Death domain</li><li><i className="kd-layer" />Kinase domain</li></ol>
            </div>
          </div>
        </div>
      </section>

      <section className="evidence-section evidence-kinase" id="kinase-inhibition">
        <div className="section-heading">
          <p className="section-index">KINASE-DEPENDENT STATE / 03</p>
          <h2>Kinase inhibition redirects assembly toward inactive disorder.</h2>
          <p>Pharmacological and genetic perturbations converge on the same architectural phenotype.</p>
        </div>
        <div className="evidence-layout">
          <figure className="paper-figure">
            <img src="/figure-2-dark.webp" width="1800" height="2390" loading="lazy" decoding="async" alt="Figure 2 showing how RIPK1 kinase inhibition converts active amyloids into disordered assemblies" />
            <figcaption><span>FIGURE 2</span> Kinase-dead RIPK1 retains assembly capacity but forms signaling-incompetent, disordered necrosomes.</figcaption>
          </figure>
          <div className="evidence-points">
            <article><b>PHARMACOLOGY</b><h3>Nec-1 enlarges and disorders WT assemblies.</h3><p>TSZ-induced small-dot necrosomes resolve as ordered rods, whereas Nec-1 treatment produces large dots that resolve as disordered structures by SMLM.</p></article>
            <article><b>GENETICS</b><h3>K45A and D138N phenocopy inhibition.</h3><p>Kinase-dead mutants predominantly form disordered assemblies under TSZ alone, and Nec-1 produces no further architectural shift.</p></article>
            <article><b>CONFORMATION</b><h3>S161 phosphomimetics bypass Nec-1.</h3><p>S161E-containing variants preserve ordered rods and necroptotic output, placing conformational activation upstream of autophosphorylation.</p></article>
          </div>
        </div>
      </section>

      <section className="trajectory-section" id="trajectory">
        <div className="section-heading compact">
          <p className="section-index">STRUCTURAL TRAJECTORY / 04</p>
          <h2>A reversible switch between ordered and disordered states.</h2>
        </div>
        <div className="trajectory-console">
          <div className="state-tabs" role="tablist" aria-label="Necrosome structural states">
            {trajectoryStates.map((state, index) => (
              <button
                key={state.id}
                role="tab"
                aria-selected={activeState === index}
                aria-controls="trajectory-panel"
                onClick={() => setActiveState(index)}
              >
                <span>{state.step}</span>{state.title}
              </button>
            ))}
          </div>
          <div className="trajectory-panel" id="trajectory-panel" role="tabpanel">
            <div className="trajectory-copy">
              <p>{current.condition}</p>
              <h3>{current.title}</h3>
              <div className="signal-status"><i />{current.signal}</div>
              <p className="state-description">{current.copy}</p>
              <div className="state-progress" aria-hidden="true"><span style={{ width: `${25 * (activeState + 1)}%` }} /></div>
              <small>SELECT A STRUCTURAL STATE TO EXPLORE THE SEQUENCE</small>
            </div>
            <StateGraphic state={current.id} />
          </div>
        </div>
        <figure className="wide-evidence">
          <img src="/figure-3-dark.webp" width="1800" height="2120" loading="lazy" decoding="async" alt="Figure 3 showing the reversible structural transition of RIPK1 assemblies" />
          <figcaption><span>DIRECT EVIDENCE</span> Time-resolved SMLM and inhibitor withdrawal reveal rods → branches → disorder, followed by re-emergence of ordered features.</figcaption>
        </figure>
      </section>

      <section className="evidence-section evidence-dd" id="death-domain">
        <div className="section-heading">
          <p className="section-index">DEATH-DOMAIN REMODELING / 05</p>
          <h2>The death domain converts loosened rods into branched collapse.</h2>
          <p>DD-mediated contacts amplify the primary radial defect into a distinct higher-order architecture.</p>
        </div>
        <div className="evidence-layout reverse">
          <div className="evidence-points">
            <article><b>JUNCTION IDENTITY</b><h3>FADD marks branch intersections.</h3><p>FADD is preferentially enriched at junction regions within kinase-inhibited RIPK3 assemblies, linking the branch architecture to death-domain interactions.</p></article>
            <article><b>STRUCTURAL NECESSITY</b><h3>ΔDD and R603E restore rods.</h3><p>Removing the DD or disrupting a key DD interface suppresses branched, disordered assembly under kinase-inactive conditions.</p></article>
            <article><b>FUNCTIONAL LIMIT</b><h3>Ordered shape alone is insufficient.</h3><p>Kinase-inactive ΔDD and R603E rods can support RIPK3 activation, yet fail to activate MLKL or execute necroptosis.</p></article>
          </div>
          <figure className="paper-figure">
            <img src="/figure-4-dark.webp" width="1800" height="2264" loading="lazy" decoding="async" alt="Figure 4 showing that the RIPK1 death domain is required for branched assembly after kinase inhibition" />
            <figcaption><span>FIGURE 4</span> Death-domain engagement drives branching, while kinase-dependent compaction remains essential for function.</figcaption>
          </figure>
        </div>
      </section>

      <section className="decompaction-section">
        <div className="decompaction-copy">
          <p className="section-index">THE PHYSICAL CHECKPOINT / 06</p>
          <h2>Kinase inhibition loosens the radial axis while preserving axial order.</h2>
          <p>Removing the death domain isolates the primary architectural defect: RIPK1 expands radially under kinase inhibition, while the RHIM-dependent periodic scaffold remains intact.</p>
          <div className="delta-grid">
            <div><b>+5.83 nm</b><span>N-terminal radial shift</span></div>
            <div><b>+6.53 nm</b><span>C-terminal radial shift</span></div>
            <div><b>34.77 → 33.58 nm</b><span>Axial pitch; no significant change</span></div>
          </div>
        </div>
        <figure className="paper-figure dark-frame">
          <img src="/figure-5-dark.webp" width="1800" height="2027" loading="lazy" decoding="async" alt="Figure 5 showing radial but not axial decompaction of RIPK1 amyloids" />
          <figcaption><span>FIGURE 5</span> Radial decompaction creates space for death-domain engagement and architectural collapse.</figcaption>
        </figure>
      </section>

      <section className="hotspots-section" id="hotspots">
        <div className="section-heading">
          <p className="section-index">FUNCTIONAL HOTSPOTS / 07</p>
          <h2>Recruitment alone cannot execute the signal.</h2>
          <p>qSMLM reveals a local-density defect that conventional abundance measurements cannot resolve.</p>
        </div>
        <div className="hotspot-layout">
          <figure className="paper-figure">
            <img src="/figure-6-dark.webp" width="1800" height="1970" loading="lazy" decoding="async" alt="Figure 6 showing quantitative SMLM analysis of RIPK3 and MLKL functional hotspots" />
            <figcaption><span>FIGURE 6</span> Radial compaction licenses MLKL activation by organizing functional RIPK3 hotspots.</figcaption>
          </figure>
          <div className="causal-chain">
            <article><span>01</span><i className="chain-dot cyan" /><h3>Radial decompaction</h3><p>Overall necrosome density falls while the axial amyloid scaffold remains assembled.</p></article>
            <article><span>02</span><i className="chain-dot magenta" /><h3>pRIPK3 hotspots disperse</h3><p>pRIPK3 abundance, cluster number, and especially local cluster density are reduced.</p></article>
            <article><span>03</span><i className="chain-dot red" /><h3>MLKL activation fails</h3><p>MLKL recruitment increases, yet local density, phosphorylation, oligomerization, and release are impaired.</p></article>
          </div>
        </div>
        <blockquote>“Radial compaction decouples molecular recruitment from signal execution.”</blockquote>
      </section>

      <section className="model-section" id="model">
        <div className="section-heading compact">
          <p className="section-index">WORKING MODEL / 08</p>
          <h2>Kinase activity orchestrates structural state and functional outcome.</h2>
        </div>
        <figure className="model-figure">
          <img src="/figure-7-model.webp" width="1600" height="960" loading="lazy" decoding="async" alt="Working model of kinase-active and kinase-inactive necrosome states" />
        </figure>
        <div className="model-comparison">
          <div className="model-active">
            <p>KINASE-ACTIVE</p><h3>Compacted architecture</h3>
            <span>Ordered amyloid assembly</span><span>Dense RIPK3–MLKL hotspots</span><span>MLKL phosphorylation</span><b>NECROPTOTIC EXECUTION</b>
          </div>
          <div className="model-divider">⇄</div>
          <div className="model-inactive">
            <p>KINASE-INACTIVE</p><h3>Decompacted architecture</h3>
            <span>Preserved RHIM axial order</span><span>DD-driven branching and collapse</span><span>Dispersed signaling molecules</span><b>NON-FUNCTIONAL STATE</b>
          </div>
        </div>
      </section>

      <section className="methods-section">
        <div className="section-heading compact">
          <p className="section-index">AMYLOMAP / 09</p>
          <h2>One framework. Three spatial scales.</h2>
        </div>
        <div className="method-cards">
          <article><b>01</b><h3>SMLM</h3><p>Low-linkage-error molecular labeling resolves cross-sectional diameter and relative domain position.</p><span>RADIAL ARCHITECTURE</span></article>
          <article><b>02</b><h3>Expansion microscopy</h3><p>Approximately 10× physical expansion reveals ordered periodic features along the assembly axis.</p><span>AXIAL PERIODICITY</span></article>
          <article><b>03</b><h3>Quantitative SMLM</h3><p>Automated secondary clustering measures signaling-molecule abundance, number, volume, and local density.</p><span>FUNCTIONAL HOTSPOTS</span></article>
        </div>
        <div className="validation-block" id="validation">
          <figure className="paper-figure validation-figure">
            <img src="/figure-s2-dark.webp" width="1800" height="1390" loading="lazy" decoding="async" alt="Figure S2 validating reduced linkage error with SNAP-tag labeling" />
            <figcaption><span>FIGURE S2</span> SNAP-tag labeling reduces linkage error and validates nanoscale width measurements.</figcaption>
          </figure>
          <div className="validation-copy">
            <p className="section-index">MEASUREMENT VALIDATION</p>
            <h3>Smaller labels reveal the native scale.</h3>
            <p>Antibody recognition broadens the apparent necrosome width. SNAP-based labeling brings the measurement into close agreement with electron microscopy and a microtubule reference of known geometry.</p>
            <div className="validation-metrics">
              <div><b>101.27 nm</b><span>Antibody-labeled RIPK3 FWHM</span></div>
              <div><b>56.45 nm</b><span>SNAP-labeled RIPK3 FWHM</span></div>
              <div><b>37.01 ± 1.36 nm</b><span>SNAP–MAP7 apparent microtubule diameter</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div><span className="brand-mark" aria-hidden="true" /><p>RIPK1 KINASE ACTIVITY DRIVES RADIAL COMPACTION OF NECROSOME TO LICENSE NECROPTOSIS</p></div>
        <p>Interactive research summary · Manuscript v5.7</p>
        <p>Lin J. et al. · Xiamen University</p>
      </footer>
    </main>
  );
}
