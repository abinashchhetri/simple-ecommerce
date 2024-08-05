import Container from "typedi";

type DiProps = {
  name: string;
  model: any;
}[];

export default (props: DiProps) => {
  props.map(({ model, name }) => {
    Container.set(name, model);
  });
};
