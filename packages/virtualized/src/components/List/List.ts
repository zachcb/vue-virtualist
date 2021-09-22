import {
  ref,
  // computed,
  // watch,
  onMounted,
  // onBeforeMount,
  // onUpdated,
  // onErrorCaptured,
  // onRenderTracked,
  // onRenderTriggered,
  // onUnmounted,
  defineComponent,
  VNode,
  h,
  // getCurrentInstance,
} from 'vue';
// import { PropValidator } from 'vue/types/options'
// const content = h('div', {
//   class: 'virtual',
//   style: {
//     height: `200px`
//   }
// })

// return h('div', {
//   class: 'virtual-scroll',
//   innerHTML: slots.default?.()
//   //class: ['button', { 'is-outlined': isOutlined }],
//   // style: [{ color: '#34495E' }, { backgroundColor: buttonColor }],
//   // id: 'submit',
//   // innerHTML: '',
//   // onClick: submitForm,
//   // key: 'submit-button'
// }, [content])

// type Props = {
//   'aria-label'?: string,

//   /**
//    * Removes fixed height from the scrollingContainer so that the total height
//    * of rows can stretch the window. Intended for use with WindowScroller
//    */
//   autoHeight: boolean,

//   /** Optional CSS class name */
//   className?: string,

//   /**
//    * Used to estimate the total height of a List before all of its rows have actually been measured.
//    * The estimated total height is adjusted as rows are rendered.
//    */
//   estimatedRowSize: number,

//   /** Height constraint for list (determines how many actual rows are rendered) */
//   height: number,

//   /** Optional renderer to be used in place of rows when rowCount is 0 */
//   noRowsRenderer: NoContentRenderer,

//   /** Callback invoked with information about the slice of rows that were just rendered.  */

//   onRowsRendered: (params: RenderedRows) => void,

//   /**
//    * Callback invoked whenever the scroll offset changes within the inner scrollable region.
//    * This callback can be used to sync scrolling between lists, tables, or grids.
//    */
//   onScroll: (params: Scroll) => void,

//   /** See Grid#overscanIndicesGetter */
//   overscanIndicesGetter: OverscanIndicesGetter,

//   /**
//    * Number of rows to render above/below the visible bounds of the list.
//    * These rows can help for smoother scrolling on touch devices.
//    */
//   overscanRowCount: number,

//   /** Either a fixed row height (number) or a function that returns the height of a row given its index.  */
//   rowHeight: CellSize,

//   /** Responsible for rendering a row given an index; ({ index: number }): node */
//   rowRenderer: RowRenderer,

//   /** Number of rows in list. */
//   rowCount: number,

//   /** See Grid#scrollToAlignment */
//   scrollToAlignment: Alignment,

//   /** Row index to ensure visible (by forcefully scrolling if necessary) */
//   scrollToIndex: number,

//   /** Vertical offset. */
//   scrollTop?: number,

//   /** Optional inline style */
//   style: Object,

//   /** Tab index for focus */
//   tabIndex?: number,

//   /** Width of list */
//   width: number,
// }

export default defineComponent({
  name: 'list',

  setup(props, { slots }) {
    const root = ref(null);
    // const instance = getCurrentInstance();
    // const el = instance?.appContext?.$el;
    // const scrollTop = ref(0);
    // const { height } = el;
    // const { width } = el;
    // const itemHeight = 50;

    // const itemRange = height / itemHeight;

    // const activeItems = computed(() => {

    // });

    function onScroll() {
      // scrollTop.value = el.scrollTop;
    }

    onMounted(() => {
      console.log(root.value);
    });

    return (): VNode => h('div', {
      class: 'virtual-container',
      directives: [{
        name: 'scroll',
        modifiers: { self: true },
        value: onScroll,
      }],
    }, [
      h('div', {
        class: 'virtual-scroll',
      }, slots.default?.()),
    ]);
  },
});
