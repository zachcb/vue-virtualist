import { List } from '.';

export default {
  title: 'Virtual/List',
  component: List,
  argTypes: {
    backgroundColor: { control: 'color' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { List },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="max-w-md h-100">
      <List v-bind="args">
        <template #default="{ item }">
          <div :key="item.index" class="h-12 rounded-full bg-green-200 flex justify-center items-center m-2">
            {{ item.title }} {{ item.index }}
          </div>
        </template>
      </List>
    </div>
  `,
});

export const DefaultList = Template.bind({});

DefaultList.args = {
  items: Array.from({ length: 1000 }, (k, v) => ({
    id: v + 1,
    index: v,
    title: 'Item'
  }))
};
