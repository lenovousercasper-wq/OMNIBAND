:root {
    --primary-teal: #0d9488;
    --bg-dark: #0f172a;
    --card-bg: #1e293b;
    --text-light: #f8fafc;
    --text-muted: #94a3b8;
    --radius: 12px;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    transition: all 0.25s ease;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-light);
    padding: 2rem 1rem;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: center;
}

/* Band Visual Preview Area */
.preview-box {
    background: var(--card-bg);
    border-radius: var(--radius);
    padding: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
}

.wristband-graphic {
    width: 240px;
    height: 240px;
    border-radius: 50%;
    border: 22px solid var(--primary-teal);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 30px rgba(13, 148, 136, 0.3);
    position: relative;
}

.screen {
    background: #000;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.size-tag {
    position: absolute;
    bottom: 1rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.3rem 0.8rem;
    border-radius: 20px;
    font-size: 0.8rem;
    color: var(--text-muted);
}

/* Product Options Panel */
.product-panel h1 {
    font-size: 2.4rem;
    margin-bottom: 0.5rem;
}

.subtitle {
    color: var(--text-muted);
    margin-bottom: 1.5rem;
}

.option-group {
    margin-bottom: 1.8rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 1.2rem;
}

.option-label {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 0.8rem;
}

.option-label span {
    color: var(--primary-teal);
}

/* Swatches & Size Buttons */
.swatches {
    display: flex;
    gap: 1rem;
}

.swatch {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
}

.swatch.active {
    border-color: #fff;
    transform: scale(1.1);
}

.sizes {
    display: flex;
    gap: 1rem;
}

.size-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: var(--text-light);
    padding: 0.8rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    flex: 1;
}

.size-btn.active {
    border-color: var(--primary-teal);
    background: rgba(13, 148, 136, 0.15);
}

.size-btn small {
    display: block;
    color: var(--text-muted);
    font-size: 0.75rem;
    margin-top: 2px;
}

/* Responsive view */
@media (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }
}
