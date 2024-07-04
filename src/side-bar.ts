import {DIV, H5} from "@step-js-html-5/index";
import ScrollablePanel from "@step-js-custom/scrollable-panel/scrollable-panel";
import {ThemesToggler} from "@step-js-custom/index";
import {Router} from "@step-js-core/index";

class SideBar extends DIV {
  model: any[];
  pathname: string;

  constructor(model: any[], pathname: string, ...params: any) {
    super(...params);
    this.addClassNames("h-100 d-flex flex-column align-items-stretch border-end");
    this.model = model;
    this.pathname = pathname;
  }

  mount() {
    const panel = new ScrollablePanel("vertical", "flex-grow-1 border-bottom p-3 bg-body-tertiary", this);
    this.model.forEach((item: any) => {
      if (!item.href) {
        const h5 = new H5(item.title, "mt-5 p-2 border-bottom");
        panel.add(h5);
        return;
      }
      const div = new DIV("ms-2 p-2");
      div.setInnerText(item.title);
      if (item.href === this.pathname) {
        div.setStyleRule("opacity", "0.5");
        div.setStyleRule("cursor", "default");
      } else {
        div.setStyleRule("cursor", "pointer");
        div.props.onClick = () => {
          Router.navigateTo(null, item.href);
        };
      }
      panel.add(div);
    });
    const div = new DIV("flex-grow-0 p-3 d-flex justify-content-end", this);
    div.add(new ThemesToggler({
      htmlElement: document.body
    }));
  }
}

export default SideBar;
