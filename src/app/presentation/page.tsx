"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

export default function PresentationPage() {
  const [isGenerating, setIsGenerating] = useState(false);

  const generatePDF = async () => {
    setIsGenerating(true);
    
    // On attend un instant pour que l'état React se mette à jour 
    // et désactive potentiellement les animations qui cachent le contenu
    await new Promise(resolve => setTimeout(resolve, 300));

    try {
      const recto = document.getElementById("recto-section");
      const verso = document.getElementById("verso-section");

      if (!recto || !verso) return;

      // On force le verso à s'afficher à l'écran pour que html-to-image puisse le capturer
      verso.scrollIntoView({ behavior: 'instant' });
      await new Promise(resolve => setTimeout(resolve, 500)); // le temps que ça s'affiche
      
      recto.scrollIntoView({ behavior: 'instant' });
      await new Promise(resolve => setTimeout(resolve, 500));

      // Paramètres pour la capture
      const captureOptions = {
        quality: 1,
        backgroundColor: "#e0d6c8",
        pixelRatio: 2 // Pour une haute résolution
      };

      // Capture Recto
      const imgDataRecto = await toPng(recto, captureOptions);
      
      // On calcule les dimensions exactes pour ne pas écraser/déformer l'image (garder le ratio de l'écran)
      const pdfWidth = 297; 
      const pdfHeight = (recto.offsetHeight * pdfWidth) / recto.offsetWidth;
      
      // Création du PDF avec les proportions exactes de votre écran
      const pdf = new jsPDF(pdfWidth > pdfHeight ? "l" : "p", "mm", [pdfWidth, pdfHeight]);
      
      pdf.addImage(imgDataRecto, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Nouvelle page pour le Verso
      pdf.addPage([pdfWidth, pdfHeight], pdfWidth > pdfHeight ? "l" : "p");

      // Capture Verso
      const imgDataVerso = await toPng(verso, captureOptions);
      pdf.addImage(imgDataVerso, "PNG", 0, 0, pdfWidth, pdfHeight);

      // Sauvegarde du fichier
      pdf.save("catalogue_clic_and_progress.pdf");
    } catch (error) {
      console.error("Erreur lors de la génération du PDF", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="h-[100dvh] w-full overflow-y-auto overflow-x-hidden snap-y snap-mandatory bg-[#e0d6c8] text-neutral-900 font-sans">
      
      {/* Bouton Télécharger PDF avec capture exacte */}
      <button 
        onClick={generatePDF}
        disabled={isGenerating}
        className="fixed bottom-6 right-6 z-50 bg-[#e86a24] text-white px-6 py-3 rounded-full shadow-2xl font-bold hover:bg-[#d65a18] transition-transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
      >
        {isGenerating ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Génération...
          </span>
        ) : (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            Télécharger le catalogue exact
          </>
        )}
      </button>

      {/* ==================== SECTION RECTO ==================== */}
      <section id="recto-section" className="relative w-full h-[100dvh] snap-start flex flex-col p-0 m-0">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row w-full h-full"
        >
          {/* Recto - Left Panel */}
          <div className="w-full md:w-1/2 h-full bg-[#f4f3ef] p-4 md:p-6 lg:p-10 flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e86a24]"></div>
                <span className="font-bold text-xs md:text-sm tracking-tight">Clic&Progress</span>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight tracking-tight mb-2">
                La formation qui donne envie d'apprendre.
              </h1>
              <p className="text-[11px] md:text-xs font-medium text-neutral-600 mb-4">Organisme de formation - Clermont-Ferrand</p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-8 flex-1 min-h-0">
              {/* Text blocks */}
              <div className="flex flex-col justify-center space-y-2 lg:space-y-3 text-[11px] lg:text-xs leading-snug text-neutral-700">
                <p>Soufiyan est un professionnel du commerce, passionné par la transmission de compétences et l'accompagnement humain.</p>
                <p>Ses méthodes interactives combinent théorie et mise en pratique directe pour des résultats durables.</p>
                <p>Clic&Progress : une approche moderne de la formation qui remet l'humain au centre de l'apprentissage.</p>
              </div>
              
              {/* Lists */}
              <div className="flex flex-col justify-center space-y-4 lg:space-y-6">
                <div>
                  <h3 className="font-bold text-xs lg:text-sm mb-2.5 uppercase tracking-wide">Ce que je forme</h3>
                  <ul className="space-y-2">
                    {[
                      { n: "01", t: "Vente & commerce", d: "Techniques de vente, relation client, animation commerciale, management d'unité." },
                      { n: "02", t: "Soft skills", d: "Communication, posture pro, coopération, prise de parole." },
                      { n: "03", t: "IA pour les pros", d: "Prendre en main l'IA générative et l'automatisation au service du métier." },
                      { n: "04", t: "Préparation aux titres", d: "Accompagnement complet vers la certification." }
                    ].map((item) => (
                      <li key={item.n} className="flex items-start gap-2">
                        <span className="w-4 h-4 lg:w-5 lg:h-5 rounded-full bg-[#e86a24] text-white flex items-center justify-center text-[9px] lg:text-[10px] font-bold shrink-0 mt-0.5">{item.n}</span>
                        <span className="text-[11px] lg:text-xs font-bold leading-tight text-neutral-800">{item.t}<br/><span className="text-[9px] lg:text-[10px] font-medium text-neutral-500 mt-0.5 block">{item.d}</span></span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold text-xs lg:text-sm mb-2 leading-tight uppercase tracking-wide">Titres & diplômes préparés</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-2">
                    {[
                      "TP Conseiller de Vente",
                      "TP AMUM",
                      "TP MUM / BTS MUM",
                      "BTS NDRC",
                      "Bac Pro MCV"
                    ].map((diplome, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#e86a24] shrink-0"></div>
                        <span className="text-[9px] lg:text-[11px] font-medium">{diplome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Recto - Right Panel (Dark) */}
          <div className="w-full md:w-1/2 h-full bg-[#121212] text-white p-6 md:p-10 lg:p-16 flex flex-col relative overflow-hidden">
            {/* Background Circle */}
            <div 
              className="absolute top-1/2 -translate-y-[60%] right-[-15%] w-[85%] sm:w-[75%] aspect-square rounded-full pointer-events-none"
              style={{
                background: "radial-gradient(circle at 75% 25%, #ff9655 0%, #e86a24 40%, #121212 75%)"
              }}
            ></div>
            
            <div className="flex items-center gap-2 relative z-10 mb-auto">
              <div className="w-3 h-3 rounded-full bg-[#e86a24]"></div>
              <span className="font-bold text-sm md:text-base tracking-tight">Clic&Progress</span>
            </div>
            
            <div className="relative z-10 mb-8 lg:mb-12">
              <h2 className="text-[2rem] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-[1.02] tracking-tight mb-4 lg:mb-6">
                Apprendre,<br />
                ça doit<br />
                <span className="text-[#e86a24]">DONNER<br />ENVIE.</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl font-medium leading-tight">
                Formations<br />
                <span className="text-[#e86a24]">vente • soft skills • IA</span><br />
                pour professionnels<br />
                et organismes.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==================== SECTION VERSO ==================== */}
      <section id="verso-section" className="relative w-full h-[100dvh] snap-start flex flex-col p-0 m-0">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col md:flex-row w-full h-full divide-y md:divide-y-0 md:divide-x divide-black/5"
        >
          {/* Panel 1 */}
          <div className="w-full md:w-1/3 h-full bg-[#fcfbf9] p-4 md:p-5 lg:p-8 flex flex-col justify-between relative z-10 shadow-[inset_-10px_0_15px_-15px_rgba(0,0,0,0.1)]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e86a24]"></div>
                <span className="font-bold text-xs tracking-tight">Clic&Progress</span>
              </div>
              
              <h2 className="text-xl lg:text-3xl font-bold leading-tight mb-4">
                Ma méthode :<br />
                On apprend<br />
                mieux quand on<br />
                joue le jeu.
              </h2>
            </div>
            
            <div className="space-y-3 lg:space-y-4 flex-1 flex flex-col justify-center min-h-0">
              {[
                { num: "1", title: "Préparation", desc: "On apprend mieux quand on joue le jeu dès le début du processus." },
                { num: "2", title: "Communauté", desc: "On essaie de créer des liens forts au sein de la formation." },
                { num: "3", title: "Mise en pratique", desc: "Processus conçu pour un meilleur développement inter-équipes." },
                { num: "4", title: "Consolidation", desc: "On applique l'apprentissage via des jeux de rôles concrets." },
              ].map((item) => (
                <div key={item.num} className="flex gap-2 lg:gap-3 items-start">
                  <span className="text-xl lg:text-2xl font-bold text-[#e86a24] leading-none mt-0.5 lg:mt-1">{item.num}</span>
                  <div>
                    <h4 className="font-bold text-[11px] lg:text-sm mb-0.5 lg:mb-1">{item.title}</h4>
                    <p className="text-[9px] lg:text-[11px] text-neutral-600 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 bg-[#d9d9d9] p-2.5 lg:p-3 rounded-sm">
              <p className="text-[10px] lg:text-xs font-bold text-neutral-700">Concrète</p>
            </div>
          </div>

          {/* Panel 2 */}
          <div className="w-full md:w-1/3 h-full bg-[#f9f8f6] p-4 md:p-5 lg:p-8 flex flex-col justify-between relative z-10 shadow-[inset_-10px_0_15px_-15px_rgba(0,0,0,0.1)]">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e86a24]"></div>
                <span className="font-bold text-xs tracking-tight">Clic&Progress</span>
              </div>
              
              <h2 className="text-lg lg:text-2xl font-bold leading-tight mb-4">
                Pour qui je travaille
              </h2>
            </div>

            <div className="space-y-2 lg:space-y-3 flex-1 flex flex-col justify-center min-h-0">
              {[
                { title: "Entreprises", desc: "Entreprises, vos équipes ont besoin de développer des compétences." },
                { title: "Organismes", desc: "Organismes de formation recherchant des intervenants experts." },
                { title: "Alternants", desc: "Accompagnement d'alternants dans leur réussite aux examens." },
              ].map((box, i) => (
                <div key={i} className="border border-neutral-300 rounded-md p-2.5 lg:p-4 bg-white">
                  <h4 className="font-bold text-[11px] lg:text-sm mb-1">{box.title}</h4>
                  <p className="text-[9px] lg:text-[11px] text-neutral-600 leading-snug">{box.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 lg:mt-6">
              <p className="text-[#e86a24] font-medium text-sm lg:text-base leading-snug">
                « Une formation réussie, ce n'est pas celle qu'on suit — c'est celle qu'on réutilise dès le lundi matin. »
              </p>
            </div>
          </div>

          {/* Panel 3 */}
          <div className="w-full md:w-1/3 h-full bg-[#f4f3ef] p-4 md:p-5 lg:p-8 flex flex-col justify-between relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#e86a24]"></div>
                <span className="font-bold text-xs tracking-tight">Clic&Progress</span>
              </div>
              
              <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
                Travaillons<br />
                ensemble<br />
                Parlons-en.
              </h2>
            </div>
            
            <div className="mt-auto">
              <h3 className="text-lg lg:text-2xl font-bold leading-tight mb-3 lg:mb-4">
                Un besoin<br />
                de formation?<br />
                <span className="text-[#e86a24]">Parlons-en.</span>
              </h3>
              
              <div className="text-[11px] lg:text-sm font-semibold space-y-1.5">
                <p className="text-[#e86a24]">clicandprogress.fr</p>
                <p>contact@clicandprogress.fr</p>
                <p>Auvergne & à distance</p>
              </div>
            </div>
          </div>

        </motion.div>
      </section>

    </div>
  );
}
