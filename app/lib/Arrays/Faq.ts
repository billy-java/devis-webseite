interface Faq {
    question: string;
    reponse: string;
    datum: Date;
  }
  
  export const Faq: Faq[] = [
    {
      question: "Welche Öffnungszeiten haben Sie?",
      reponse: "Unsere Öffnungszeiten sind von Montag bis Freitag, 9:00 bis 18:00 Uhr. Am Wochenende und an Feiertagen sind wir geschlossen. Für dringende Anfragen außerhalb der Öffnungszeiten können Sie uns per E-Mail kontaktieren, und wir werden uns so schnell wie möglich bei Ihnen melden.",
      datum: new Date(),  // Insertion de la date actuelle
    },
      
    {
      question: "Welche Dienstleistungen bieten Sie an?",
      reponse: "Wir bieten eine breite Palette von Dienstleistungen an, darunter die Erstellung von Websites, E-Commerce-Lösungen, Portfolio-Websites, SEO-Optimierung und Wartung bestehender Websites.",
      datum: new Date(),  // Insertion de la date actuelle
      },
      
      {
        question: "Wie lange dauert es, eine Website zu erstellen?",
        reponse: "Die Dauer der Erstellung einer Website hängt von der Komplexität des Projekts ab. In der Regel dauert es zwischen 4 und 8 Wochen, um eine vollständig funktionsfähige Website zu erstellen.",
        datum: new Date(),  // Insertion de la date actuelle
      },

      {
        question: "Welche Kosten sind mit der Erstellung einer Website verbunden?",
        reponse: "Die Kosten variieren je nach den spezifischen Anforderungen des Projekts. Wir bieten maßgeschneiderte Angebote an, die auf den Bedürfnissen und dem Budget unserer Kunden basieren.",
        datum: new Date(),  // Insertion de la date actuelle
      },

      {
        question: "Bieten Sie auch Hosting-Dienste an?",
        reponse: "Ja, wir bieten zuverlässige Hosting-Dienste an, die auf die Bedürfnisse Ihrer Website zugeschnitten sind. Unsere Hosting-Pakete beinhalten regelmäßige Backups, Sicherheitsupdates und technischen Support.",
        datum: new Date(),  // Insertion de la date actuelle
      },

      {
        question: "Kann ich meine Website nach der Fertigstellung selbst verwalten?",
        reponse: "Absolut! Wir verwenden benutzerfreundliche Content-Management-Systeme (CMS), die es Ihnen ermöglichen, Inhalte einfach zu aktualisieren und zu verwalten. Wir bieten auch Schulungen an, um Ihnen den Einstieg zu erleichtern.",
        datum: new Date(),  // Insertion de la date actuelle
      },
     

      {
        question: "Wie läuft der Entwicklungsprozess ab?",
        reponse: "Unser Entwicklungsprozess umfasst mehrere Schritte: Erstberatung, Planung und Design, Entwicklung, Testen und schließlich die Live-Schaltung der Website. Wir halten Sie während des gesamten Prozesses auf dem Laufenden und arbeiten eng mit Ihnen zusammen, um sicherzustellen, dass das Endprodukt Ihren Erwartungen entspricht.",
        datum: new Date(),  // Insertion de la date actuelle
      },
  ];
  