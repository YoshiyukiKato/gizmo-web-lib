import ViewComponent from "./component";
import Filter from "./filter";

export type renderFunc = (userAttrs:any) => any;

export default class View{
  readonly components:ViewComponent[] = [];
  readonly filters:Filter[] = [];
  private userAttrs:any = {}; 
  private state:any = { renderCount : 0 };

  /**
   * Build a component dynamically and use it
   * @param id A unique id of the component
   * @param render A render function of the component
   */
  import(id:string, render:renderFunc){
    class Component extends ViewComponent{
      id = id;
    }
    const component = new Component();
    component.render = render.bind(this);
    this.use(component);
  }

  /**
   * Register a view component
   * @param component The view component
   */
  use(component:ViewComponent){
    this.components.push(component);
    this.filters.forEach((filter:Filter) => {
      if(!filter.componentId || component.id === filter.componentId){
        component.useFilter(filter);
      }
    });
    component._render(this.userAttrs);
    return;
  }

  /**
   * Distribute a filter to target components
   * @param filter The filter
   */
  useFilter(filter:Filter){
    this.filters.push(filter);
    if(!filter.componentId){
      this.components.forEach((component:ViewComponent) => {
        component.useFilter(filter);
      });
    }else{
      const component = this.components.find((component:ViewComponent) => {
        return component.id === filter.componentId;
      });
      if(component) component.useFilter(filter);
    }
  }

  /**
   * Call render method of all view components with user attributes
   * @param userAttrs The latest user attributes
   */
  render(userAttrs:any):Promise<any>{
    this.userAttrs = userAttrs;

    const renderPromise = this.components
    .map((component:ViewComponent) => {
      return component._render(userAttrs);
    });
    
    return Promise.all(renderPromise).then(() => {
      this.state.renderCount += 1;
    });
  }
}