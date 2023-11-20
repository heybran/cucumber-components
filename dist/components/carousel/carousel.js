import{B as n}from"../assets/base-element-b7991dcc.js";customElements.define("cc-carousel",class extends n{get itemsPerView(){let t=3;return this.getAttribute("items-per-view")&&(t=Number(this.getAttribute("items-per-view"))),t}get totalSlides(){return Math.ceil(this.carouselItems.length/this.itemsPerView)}connectedCallback(){super.render(`<div part="container">
	<div
		part="carousel-container"
		aria-busy="false"
		aria-atomic="true"
		tabindex="0"
	>
		<slot></slot>
	</div>
	<div part="navigation">
		<button
			type="button"
			part="navigation-button"
			aria-label="Previous slide"
			aria-disabled="false"
			onclick="this.getRootNode().host.showPreviousSlide();"
		>
			<slot name="previous-slide-icon">
        <svg
					part="navigation-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
					/>
        </svg>
      </slot>
		</button>
		<button
			type="button"
			part="navigation-button"
			aria-label="Next slide"
			aria-disabled="false"
			onclick="this.getRootNode().host.showNextSlide();"
		>
			<slot name="next-slide-icon">
        <svg
					part="navigation-icon"
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					viewBox="0 0 16 16"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
					/>
        </svg>
      </slot>
		</button>
	</div>
	<div part="pagination" role="tablist"></div>
</div>`,`*{box-sizing:border-box}:host{--aspect-ratio: 16 / 9;--scroll-hint: 0px;--items-per-view: 3;--spacing: 10px;--pagination-size: 1rem;--focus-ring-color: #6d4aff;--button-background-color: hsl(0, 0%, 85%);--button-background-active-color: hsl(0, 0%, 35%);display:block;opacity:0}:host(:defined){opacity:1}[part=container]{display:grid;grid-template-columns:min-content 1fr min-content;grid-template-rows:1fr min-content;align-items:center;position:relative;column-gap:0;row-gap:0;grid-template-areas:"previous-button slides next-button" ". pagination ."}:host([pagination]) [part=container]{row-gap:1rem}:host([navigation]) [part=container]{column-gap:1rem}[part=carousel-container]{--gap-numbers: calc(var(--items-per-view) - 1);display:grid;gap:var(--spacing);grid-auto-columns:calc((100% - var(--gap-numbers) * var(--spacing)) / var(--items-per-view));overflow-y:hidden;overflow-x:auto;scroll-behavior:smooth;grid-auto-flow:column;grid-area:slides;-ms-overflow-style:none;scrollbar-width:none;width:100%;height:100%;place-items:center;aspect-ratio:calc(var(--aspect-ratio) * var(--items-per-view))}[part=carousel-container]::-webkit-scrollbar{display:none}[part=navigation]{display:none}:host([navigation]) [part=navigation]{display:contents}button{background:none;border:none;cursor:pointer;appearance:none;border-radius:50%;font-size:inherit;font-family:inherit;display:flex;align-items:center;justify-content:center}[part=navigation-button]{color:#777;padding:.5em}[part=navigation-button]:hover,[part=navigation-button]:focus-visible{background:var(--button-background-color)}[part=navigation-icon]{width:1.5em;height:1.5em}[part=navigation-button--previous]{grid-area:previous-button}[part=navigation-button--next]{grid-area:next-button}[part=pagination]{grid-area:pagination;display:flex;align-items:center;gap:10px;justify-content:center}[role=tab]{width:var(--pagination-size);height:var(--pagination-size);background:var(--button-background-color)}button:focus-visible{outline-color:var(--focus-ring-color);outline-offset:3px}button[aria-selected=true]{background:var(--button-background-active-color)}button[disabled]{opacity:.5;cursor:not-allowed}
`),this.carouselContainer=this.shadowRoot.querySelector('[part="carousel-container"]'),this.pagination=this.shadowRoot.querySelector('[part="pagination"]'),this.navigationButtons=this.shadowRoot.querySelectorAll('[part="navigation-button"]'),this.style.setProperty("--items-per-view",this.itemsPerView),this.activeSlide=1,this.hasAttribute("aria-label")||this.setAttribute("aria-label","Carousel"),this.hasAttribute("role")||this.setAttribute("role","region"),this.carouselItems=this.querySelectorAll("cc-carousel-item"),this.carouselItems.length>0&&this.hasAttribute("pagination")&&this.renderPaginationButtons(),this.defer(()=>{const t=`carousel-container-${this.uuid()}`;this.carouselContainer.id=t,this.pagination?.setAttribute("aria-controls",t),this.navigationButtons?.forEach(e=>e.setAttribute("aria-controls",t))})}renderPaginationButtons(){for(let t=0;t<this.totalSlides;t++){const e=document.createElement("button");e.setAttribute("role","tab"),e.setAttribute("part","pagination-button"),e.setAttribute("aria-label",`Go to slide ${t+1} of ${this.totalSlides}`),t===0?(e.setAttribute("aria-selected","true"),e.setAttribute("tabindex","0")):(e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1")),e.setAttribute("onclick",`this.getRootNode().host.showSlide(${t+1})`),this.pagination.appendChild(e)}}showPreviousSlide(){this.showSlide(this.activeSlide-1)}showNextSlide(){this.showSlide(this.activeSlide+1)}showSlide(t){const e=(this.carouselItems[0].clientWidth+Number(window.getComputedStyle(this).getPropertyValue("--spacing").replace("px","").trim()))*this.itemsPerView*Math.abs(t-this.activeSlide);t>this.activeSlide?this.carouselContainer.scrollLeft+=e:this.carouselContainer.scrollLeft-=ScreenOrientation,this.updatePaginationButtonsStatus(t),this.activeSlide=t,this.hasAttribute("loop")||(this.activeSlide===this.totalSlides?this.disableNextButton():this.activeSlide===1&&this.disablePreviousButton())}updatePaginationButtonsStatus(t){const e=this.shadowRoot?.querySelector('[role="tab"][aria-selected="true"]'),i=Array.from(this.pagination.children).find((o,a)=>a+1===t);e.setAttribute("aria-selected","false"),e.setAttribute("tabindex","-1"),i?.setAttribute("aria-selected","true"),i?.setAttribute("tabindex","0")}disablePreviousButton(){this.disableNavigationButton("previous")}disableNextButton(){this.disableNavigationButton("next")}enableCurrentDisabledButton(){const t=this.shadowRoot.querySelector('[part="navigation-button"][disabled]');return t&&(t.removeAttribute("disabled"),t.setAttribute("aria-disabled","false")),this}disableNavigationButton(t){this.enableCurrentDisabledButton();const e=t==="previous"?1:2,i=this.shadowRoot.querySelector(`[part="navigation-button"]:nth-child(${e})`);return i.setAttribute("disabled",""),i.setAttribute("aria-disabled","true"),this}});
