
if (window.innerWidth > 768) {
    const interactiveLeaves = document.getElementById('interactiveLeaves');
    const leafCount = 8;
    
    
    const interactiveLeafImages = [
        'images/leaf1.png',
        'images/leaf2.png',
        'images/leaf3.png',
        'images/leaf4.png'
    ];
    
    for (let i = 0; i < leafCount; i++) {
        const leaf = document.createElement('div');
        leaf.className = 'side-leaf swing';
        
        
        const isLeftSide = i % 2 === 0;
        const left = isLeftSide ? 5 : 95;
        
        
        const top = 10 + (i * 12); 
        
        
        const size = 60 + Math.random() * 45;
        
        leaf.style.left = `${left}vw`;
        leaf.style.top = `${top}vh`;
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;
        leaf.style.zIndex = '100';
        
        
        const leafImg = document.createElement('img');
        const randomLeafIndex = Math.floor(Math.random() * interactiveLeafImages.length);
        leafImg.src = interactiveLeafImages[randomLeafIndex];
        leafImg.alt = 'Дубовый лист';
        leafImg.style.width = '100%';
        leafImg.style.height = '100%';
        leafImg.style.objectFit = 'contain';
        leafImg.style.filter = 'drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3))';
        leafImg.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease';
        
        
        if (!isLeftSide) {
            leafImg.style.transform = 'scaleX(-1)';
        }
        
        leaf.appendChild(leafImg);
        
        leaf.addEventListener('mouseenter', function() {
            this.classList.remove('swing');
            this.classList.add('blow-away');
            
            
            const windX = isLeftSide ? 
                (300 + Math.random() * 200) : 
                -(300 + Math.random() * 200);
            const windY = -(150 + Math.random() * 150);
            
            this.style.setProperty('--wind-x', `${windX}px`);
            this.style.setProperty('--wind-y', `${windY}px`);
            
            
            const img = this.querySelector('img');
            if (img) {
                img.style.opacity = '0';
                img.style.transition = 'opacity 1s ease, transform 2.5s ease';
            }
            
            setTimeout(() => {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            }, 2500);
        });
        
        interactiveLeaves.appendChild(leaf);
    }
}


const fallingLeaves = document.getElementById('fallingLeaves');
const fallingLeafCount = window.innerWidth > 768 ? 15 : 8;


const fallingLeafImages = [
    'images/bg-leaf1.png',
    'images/bg-leaf2.png',
    'images/bg-leaf3.png',
    'images/bg-leaf4.png'
];

for (let i = 0; i < fallingLeafCount; i++) {
    const leaf = document.createElement('div');
    leaf.className = 'falling-leaf';
    
    const left = Math.random() * 100;

    const size = 60 + Math.random() * 45;
    const duration = 15 + Math.random() * 20;
    const delay = Math.random() * 20;

    const randomLeafIndex = Math.floor(Math.random() * fallingLeafImages.length);
    
    leaf.style.left = `${left}vw`;
    leaf.style.width = `${size}px`;
    leaf.style.height = `${size}px`;
    leaf.style.animationDuration = `${duration}s`;
    leaf.style.animationDelay = `${delay}s`;
    
    leaf.style.backgroundImage = `url('${fallingLeafImages[randomLeafIndex]}')`;
    leaf.style.backgroundSize = 'contain';
    leaf.style.backgroundRepeat = 'no-repeat';
    leaf.style.backgroundPosition = 'center';
    leaf.style.transform = `rotate(${Math.random() * 360}deg)`;
    leaf.style.opacity = '0.6';
    leaf.style.zIndex = '1';
    
    fallingLeaves.appendChild(leaf);
}