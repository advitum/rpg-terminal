namespace UIWindow {
	export class UIWindow {
		protected container: HTMLElement;
		protected content: HTMLElement;
		protected titleBar: HTMLElement;
		
		constructor() {
			let root = document.getElementById('root');
			
			this.container = document.createElement('div');
			this.container.classList.add('window');
			
			if(root) {
				root.appendChild(this.container);
			}
			
			this.titleBar = document.createElement('div');
			this.titleBar.classList.add('window_titleBar');
			this.container.appendChild(this.titleBar);
			
			this.titleBar.innerHTML = '<div class="window_buttons"><div class="window_close"></div><div class="window_minimize"></div><div class="window_maximize"></div></div><div class="window_title">Lorem ipsum dolor sit amet, consectetur.</div>';
			
			this.content = document.createElement('div');
			this.content.classList.add('window_content');
			this.container.appendChild(this.content);
			
			this.content.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae provident sed mollitia nihil, officia asperiores aliquam nemo praesentium assumenda tempora. Debitis rem repudiandae adipisci veritatis saepe, inventore, modi accusantium sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, eius placeat dicta enim cum minus, accusamus mollitia quos quia eum iure veniam! Quasi temporibus porro dolorem, asperiores voluptate ex corrupti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ullam dicta sint officia pariatur iste deserunt. Magni nesciunt eveniet exercitationem maiores, quas natus nobis repellat hic, doloribus culpa, molestiae. Eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae provident sed mollitia nihil, officia asperiores aliquam nemo praesentium assumenda tempora. Debitis rem repudiandae adipisci veritatis saepe, inventore, modi accusantium sequi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nam vel harum quibusdam officiis voluptatem sint. Impedit nihil obcaecati vitae a repellendus, dolores reiciendis! Similique inventore deserunt totam tempore blanditiis. Excepturi, eius placeat dicta enim cum minus, accusamus mollitia quos quia eum iure veniam! Quasi temporibus porro dolorem, asperiores voluptate ex corrupti! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ullam dicta sint officia pariatur iste deserunt. Magni nesciunt eveniet exercitationem maiores, quas natus nobis repellat hic, doloribus culpa, molestiae. Eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia amet cupiditate dolores magnam delectus quae veritatis perferendis, tempora facere quo soluta, itaque at culpa, natus eligendi. Odit ipsam, voluptates culpa. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo commodi blanditiis voluptates ipsa? Iusto quae ipsam unde, officia repudiandae accusamus nihil consectetur voluptatem delectus illum quas cum deserunt? Eum, perferendis.';
		}
	}
}