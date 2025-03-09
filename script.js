// SVG generation patterns and shapes
const svgPatterns = {
    minimal: [
        (color1, color2, background) => `<circle cx="50" cy="50" r="40" fill="${color1}" />`,
        (color1, color2, background) => `<rect x="20" y="20" width="60" height="60" fill="${color1}" />`,
        (color1, color2, background) => `<polygon points="50,10 90,90 10,90" fill="${color1}" />`
    ],
    abstract: [
        (color1, color2, background) => `
            <defs>
                <linearGradient id="grad1" gradientTransform="rotate(45)">
                    <stop offset="0%" stop-color="${color1}" />
                    <stop offset="100%" stop-color="${color2}" />
                </linearGradient>
            </defs>
            <path d="M10,50 Q50,10 90,50 T170,50" stroke="url(#grad1)" stroke-width="8" fill="none" />
            <circle cx="40" cy="50" r="20" fill="${color1}" opacity="0.6" />
            <circle cx="70" cy="40" r="15" fill="${color2}" opacity="0.6" />
        `,
        (color1, color2, background) => `
            <defs>
                <radialGradient id="grad1">
                    <stop offset="0%" stop-color="${color1}" />
                    <stop offset="100%" stop-color="${color2}" />
                </radialGradient>
            </defs>
            <circle cx="50" cy="50" r="45" fill="url(#grad1)" />
            <circle cx="35" cy="35" r="10" fill="white" opacity="0.6" />
        `,
        (color1, color2, background) => `
            <path d="M10,10 C30,40 70,10 90,40 S30,90 50,90" stroke="${color1}" stroke-width="4" fill="none" />
            <path d="M50,10 C70,30 50,70 90,90" stroke="${color2}" stroke-width="4" fill="none" />
        `
    ],
    geometric: [
        (color1, color2, background) => `
            <rect x="10" y="10" width="30" height="30" fill="${color1}" />
            <rect x="40" y="10" width="30" height="30" fill="${color2}" />
            <rect x="70" y="10" width="30" height="30" fill="${color1}" />
            <rect x="10" y="40" width="30" height="30" fill="${color2}" />
            <rect x="40" y="40" width="30" height="30" fill="${color1}" />
            <rect x="70" y="40" width="30" height="30" fill="${color2}" />
            <rect x="10" y="70" width="30" height="30" fill="${color1}" />
            <rect x="40" y="70" width="30" height="30" fill="${color2}" />
            <rect x="70" y="70" width="30" height="30" fill="${color1}" />
        `,
        (color1, color2, background) => `
            <polygon points="50,10 90,50 50,90 10,50" fill="${color1}" />
            <polygon points="50,30 70,50 50,70 30,50" fill="${color2}" />
        `,
        (color1, color2, background) => `
            <circle cx="30" cy="30" r="20" fill="${color1}" />
            <circle cx="70" cy="30" r="20" fill="${color2}" />
            <circle cx="30" cy="70" r="20" fill="${color2}" />
            <circle cx="70" cy="70" r="20" fill="${color1}" />
        `
    ],
    natural: [
        (color1, color2, background) => `
            <defs>
                <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="${color1}" />
                    <stop offset="100%" stop-color="white" />
                </linearGradient>
            </defs>
            <rect x="0" y="0" width="100" height="70" fill="url(#skyGradient)" />
            <circle cx="80" cy="20" r="15" fill="yellow" />
            <path d="M0,70 Q50,40 100,70 L100,100 L0,100 Z" fill="${color2}" />
            <path d="M20,70 L20,50 L30,70 L30,45 L40,70 Z" fill="brown" />
            <path d="M30,50 L20,40 L40,40 Z" fill="darkgreen" />
            <path d="M30,40 L15,30 L45,30 Z" fill="darkgreen" />
            <path d="M30,30 L20,20 L40,20 Z" fill="darkgreen" />
        `,
        (color1, color2, background) => `
            <rect x="0" y="0" width="100" height="60" fill="${color1}" />
            <rect x="0" y="60" width="100" height="40" fill="${color2}" />
            <path d="M10,60 L40,20 L70,60 Z" fill="#95a5a6" />
            <path d="M60,60 L80,30 L100,60 Z" fill="#7f8c8d" />
            <rect x="40" y="40" width="20" height="20" fill="#3498db" />
        `,
        (color1, color2, background) => `
            <circle cx="50" cy="50" r="30" fill="${color1}" />
            <path d="M30,50 C30,30 70,30 70,50 C70,70 30,70 30,50 Z" fill="${color2}" />
        `
    ],
    cartoon: [
        (color1, color2, background) => `
            <circle cx="50" cy="50" r="40" fill="${color1}" />
            <circle cx="35" cy="40" r="10" fill="white" />
            <circle cx="35" cy="40" r="5" fill="black" />
            <circle cx="65" cy="40" r="10" fill="white" />
            <circle cx="65" cy="40" r="5" fill="black" />
            <path d="M40,70 Q50,80 60,70" stroke="black" stroke-width="3" fill="none" />
        `,
        (color1, color2, background) => `
            <rect x="20" y="20" width="60" height="60" rx="10" fill="${color1}" />
            <circle cx="40" cy="45" r="5" fill="white" />
            <circle cx="60" cy="45" r="5" fill="white" />
            <rect x="35" y="65" width="30" height="5" rx="2" fill="white" />
        `,
        (color1, color2, background) => `
            <path d="M10,70 Q50,10 90,70" fill="${color1}" />
            <circle cx="40" cy="50" r="10" fill="white" />
            <circle cx="40" cy="50" r="5" fill="black" />
            <circle cx="60" cy="50" r="10" fill="white" />
            <circle cx="60" cy="50" r="5" fill="black" />
            <path d="M40,80 Q50,90 60,80" stroke="black" stroke-width="3" fill="none" />
        `
    ]
};

// Templates data
const templates = [
    { name: "נוף הרים", category: "טבע", prompt: "הרים מושלגים עם אגם ועצים", style: "natural", color1: "#3498db", color2: "#2ecc71", background: "#ecf0f1", complexity: 4 },
    { name: "גלקסיה", category: "חלל", prompt: "גלקסיה ספירלית עם כוכבים", style: "abstract", color1: "#9b59b6", color2: "#3498db", background: "#2c3e50", complexity: 4 },
    { name: "פרח גיאומטרי", category: "אבסטרקט", prompt: "פרח בנוי מצורות גיאומטריות", style: "geometric", color1: "#e74c3c", color2: "#f1c40f", background: "#ecf0f1", complexity: 3 },
    { name: "לוגו פשוט", category: "מיתוג", prompt: "לוגו מינימליסטי", style: "minimal", color1: "#3498db", color2: "#2c3e50", background: "#ffffff", complexity: 2 },
    { name: "פנים מצוירות", category: "דמויות", prompt: "פנים מסוגננות בסגנון קריקטורה", style: "cartoon", color1: "#e67e22", color2: "#d35400", background: "#f39c12", complexity: 3 },
    { name: "עיצוב אייקון", category: "ממשק", prompt: "אייקון פשוט לאפליקציה", style: "minimal", color1: "#1abc9c", color2: "#16a085", background: "#ffffff", complexity: 2 }
];

// Initialize elements
document.addEventListener('DOMContentLoaded', () => {
    const promptInput = document.getElementById('prompt');
    const styleSelect = document.getElementById('style');
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const backgroundInput = document.getElementById('background');
    const complexityInput = document.getElementById('complexity');
    const generateBtn = document.getElementById('generate-btn');
    const randomBtn = document.getElementById('random-btn');
    const resultContainer = document.getElementById('result-container');
    const downloadBtn = document.getElementById('download-btn');
    const shareBtn = document.getElementById('share-btn');
    const templatesContainer = document.getElementById('templates-container');
    const toast = document.getElementById('toast');

    // Generate SVG based on inputs
    function generateSVG() {
        const prompt = promptInput.value;
        const style = styleSelect.value;
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        const background = backgroundInput.value;
        const complexity = parseInt(complexityInput.value);

        // Generate a seed based on the prompt
        let seed = 0;
        for (let i = 0; i < prompt.length; i++) {
            seed += prompt.charCodeAt(i);
        }

        // Create SVG content
        let svgContent = '';
        const patterns = svgPatterns[style];
        
        // Always include a background
        svgContent += `<rect x="0" y="0" width="100" height="100" fill="${background}" />`;
        
        // Add base pattern
        const basePatternIndex = seed % patterns.length;
        svgContent += patterns[basePatternIndex](color1, color2, background);
        
        // Add additional elements based on complexity
        for (let i = 0; i < complexity; i++) {
            const patternIndex = (seed + i) % patterns.length;
            const scale = 0.5 - (i * 0.1);
            const translateX = (i * 10) + (seed % 20);
            const translateY = (i * 10) + ((seed + 10) % 20);
            const opacity = 0.8 - (i * 0.15);
            
            if (i >= 3) continue; // Limit to prevent overcrowding
            
            svgContent += `<g transform="translate(${translateX}, ${translateY}) scale(${scale})" opacity="${opacity}">
                ${patterns[(patternIndex + 1) % patterns.length](color1, color2, background)}
            </g>`;
        }

        // Create the complete SVG
        const svgOutput = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
            ${svgContent}
        </svg>`;

        // Display the SVG
        resultContainer.innerHTML = svgOutput;
        
        // Show success message
        showToast('התמונה נוצרה בהצלחה!');
    }

    // Generate random SVG
    function generateRandomSVG() {
        // Set random values
        const styles = ['minimal', 'abstract', 'geometric', 'natural', 'cartoon'];
        const randomStyle = styles[Math.floor(Math.random() * styles.length)];
        
        const getRandomColor = () => {
            const letters = '0123456789ABCDEF';
            let color = '#';
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        };
        
        const randomPrompts = [
            'נוף הרים ואגם',
            'פרח אבסטרקטי',
            'דמות מצוירת',
            'גלקסיה וכוכבים',
            'עיצוב גיאומטרי',
            'לוגו פשוט',
            'גלים בים',
            'עץ ענפים',
            'בית בכפר'
        ];
        
        // Set the random values to the inputs
        promptInput.value = randomPrompts[Math.floor(Math.random() * randomPrompts.length)];
        styleSelect.value = randomStyle;
        color1Input.value = getRandomColor();
        color2Input.value = getRandomColor();
        backgroundInput.value = getRandomColor();
        complexityInput.value = Math.floor(Math.random() * 4) + 2; // Random value between 2-5
        
        // Generate the SVG
        generateSVG();
    }

    // Download SVG
    function downloadSVG() {
        const svgContent = resultContainer.innerHTML;
        if (!svgContent) {
            showToast('אין תמונה להורדה!', true);
            return;
        }
        
        const blob = new Blob([svgContent], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        
        a.href = url;
        a.download = 'SVG_image_' + Date.now() + '.svg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        showToast('התמונה הורדה בהצלחה!');
    }

    // Share SVG
    function shareSVG() {
        const svgContent = resultContainer.innerHTML;
        if (!svgContent) {
            showToast('אין תמונה לשיתוף!', true);
            return;
        }
        
        // Fallback to copy to clipboard
        try {
            const textarea = document.createElement('textarea');
            textarea.value = svgContent;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('התמונה הועתקה ללוח! כעת תוכל להדביק אותה.');
        } catch (err) {
            showToast('שגיאה בהעתקה: ' + err, true);
        }
    }

    // Show a toast notification
    function showToast(message, isError = false) {
        toast.textContent = message;
        toast.className = isError ? 'toast error show' : 'toast show';
        
        setTimeout(() => {
            toast.className = toast.className.replace('show', '');
        }, 3000);
    }

    // Load a template
    function loadTemplate(template) {
        promptInput.value = template.prompt;
        styleSelect.value = template.style;
        color1Input.value = template.color1;
        color2Input.value = template.color2;
        backgroundInput.value = template.background;
        complexityInput.value = template.complexity;
        
        generateSVG();
        
        showToast(`תבנית "${template.name}" נטענה בהצלחה!`);
    }

    // Create template cards
    function createTemplateCards() {
        templatesContainer.innerHTML = '';
        
        templates.forEach(template => {
            const card = document.createElement('div');
            card.className = 'template-card';
            
            const preview = document.createElement('div');
            preview.className = 'template-preview';
            
            // Generate a preview SVG
            const previewSVG = document.createElement('div');
            const patterns = svgPatterns[template.style];
            const pattern = patterns[0];
            
            previewSVG.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <rect x="0" y="0" width="100" height="100" fill="${template.background}" />
                ${pattern(template.color1, template.color2, template.background)}
            </svg>`;
            
            preview.appendChild(previewSVG);
            
            const info = document.createElement('div');
            info.className = 'template-info';
            
            const name = document.createElement('div');
            name.className = 'template-name';
            name.textContent = template.name;
            
            const category = document.createElement('div');
            category.className = 'template-category';
            category.textContent = template.category;
            
            info.appendChild(name);
            info.appendChild(category);
            
            card.appendChild(preview);
            card.appendChild(info);
            
            // Add click event
            card.addEventListener('click', () => loadTemplate(template));
            
            templatesContainer.appendChild(card);
        });
    }

    // Set up event listeners
    generateBtn.addEventListener('click', generateSVG);
    randomBtn.addEventListener('click', generateRandomSVG);
    downloadBtn.addEventListener('click', downloadSVG);
    shareBtn.addEventListener('click', shareSVG);

    // Initialize
    createTemplateCards();
    generateRandomSVG(); // Start with a random image
});
