export type CheckboxGroupSelectors = "[data-disabled]" | "[data-readonly]" | "[data-required]" | "[data-invalid]";

export type CheckboxSelectors = "[data-selected]" | "[data-indeterminate]" | "[data-hovered]" | "[data-pressed]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | "[data-readonly]" | "[data-invalid]" | "[data-required]";

export type ColorThumbSelectors = "[data-dragging]" | "[data-hovered]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]";

export type ColorAreaSelectors = "[data-disabled]";

export type InputSelectors = "[data-hovered]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | "[data-invalid]";

export type ColorFieldSelectors = "[data-disabled]" | "[data-invalid]" | '[data-channel="hex"]' | '[data-channel="hue"]' | '[data-channel="saturation"]' | '[data-channel="..."]';

export type SliderSelectors = '[data-orientation="horizontal"]' | '[data-orientation="vertical"]' | "[data-disabled]";

export type SliderTrackSelectors = '[data-orientation="horizontal"]' | '[data-orientation="vertical"]' | "[data-disabled]" | "[data-hovered]";

export type SliderThumbSelectors = "[data-dragging]" | "[data-hovered]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]";

export type ColorSliderSelectors = '[data-orientation="horizontal"]' | '[data-orientation="vertical"]' | "[data-disabled]";

export type ColorWheelSelectors = "[data-disabled]";

export type ColorWheelTrackSelectors = "[data-disabled]";

export type LinkSelectors = "[data-current]" | "[data-hovered]" | "[data-pressed]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]";

export type BreadcrumbSelectors = "[data-current]";

export type ButtonSelectors = "[data-hovered]" | "[data-pressed]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]";

export type CalendarSelectors = "[data-disabled]" | "[data-invalid]";

export type CalendarCellSelectors = "[data-hovered]" | "[data-pressed]" | "[data-selected]" | "[data-selection-start]" | "[data-selection-end]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | "[data-outside-visible-range]" | "[data-outside-month]" | "[data-unavailable]" | "[data-invalid]";

export type ListBoxSelectors = "[data-empty]" | "[data-focused]" | "[data-focus-visible]" | "[data-drop-target]" | '[data-layout="stack"]' | '[data-layout="grid"]';

export type ListBoxItemSelectors = "[data-hovered]" | "[data-pressed]" | "[data-selected]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | '[data-selection-mode="single"]' | '[data-selection-mode="multiple"]' | "[data-allows-dragging]" | "[data-dragging]" | "[data-drop-target]";

export type GroupSelectors = "[data-hovered]" | "[data-focus-within]" | "[data-focus-visible]" | "[data-disabled]" | "[data-invalid]";

export type OverlayArrowSelectors = '[data-placement="left"]' | '[data-placement="right"]' | '[data-placement="top"]' | '[data-placement="bottom"]';

export type PopoverSelectors = `[data-trigger="${string}"]` | '[data-placement="left"]' | '[data-placement="right"]' | '[data-placement="top"]' | '[data-placement="bottom"]' | "[data-entering]" | "[data-exiting]";

export type ComboBoxSelectors = "[data-open]" | "[data-disabled]" | "[data-invalid]" | "[data-required]";

export type DateFieldSelectors = "[data-invalid]" | "[data-disabled]";

export type DateInputSelectors = "[data-hovered]" | "[data-focus-within]" | "[data-focus-visible]" | "[data-disabled]" | "[data-invalid]";

export type DateSegmentSelectors = "[data-hovered]" | "[data-focused]" | "[data-focus-visible]" | "[data-placeholder]" | "[data-readonly]" | "[data-disabled]" | "[data-invalid]";

export type DatePickerSelectors = "[data-focus-within]" | "[data-focus-visible]" | "[data-disabled]" | "[data-invalid]" | "[data-open]";

export type DropZoneSelectors = "[data-hovered]" | "[data-focused]" | "[data-focus-visible]" | "[data-drop-target]" | "[data-disabled]";

export type GridListSelectors = "[data-empty]" | "[data-focused]" | "[data-focus-visible]" | "[data-drop-target]" | '[data-layout="stack"]' | '[data-layout="grid"]';

export type GridListItemSelectors = "[data-hovered]" | "[data-pressed]" | "[data-selected]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | '[data-selection-mode="single"]' | '[data-selection-mode="multiple"]' | "[data-allows-dragging]" | "[data-dragging]" | "[data-drop-target]";

export type MenuItemSelectors = "[data-hovered]" | "[data-pressed]" | "[data-selected]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | '[data-selection-mode="single"]' | '[data-selection-mode="multiple"]' | "[data-allows-dragging]" | "[data-dragging]" | "[data-drop-target]" | "[data-has-submenu]" | "[data-open]";

export type MeterSelectors = `[aria-valuetext]`;

export type ModalSelectors = "[data-entering]" | "[data-exiting]";

export type NumberFieldSelectors = "[data-disabled]" | "[data-invalid]";

export type ProgressBarSelectors = `[aria-valuetext]` | ":not([aria-valuenow])";

export type RadioGroupSelectors = '[data-orientation="horizontal"]' | '[data-orientation="vertical"]' | "[data-disabled]" | "[data-readonly]" | "[data-required]" | "[data-invalid]";

export type RadioSelectors = "[data-selected]" | "[data-hovered]" | "[data-pressed]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | "[data-readonly]" | "[data-invalid]" | "[data-required]";

export type SearchFieldSelectors = "[data-empty]" | "[data-disabled]" | "[data-invalid]";

export type SelectSelectors = "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | "[data-open]" | "[data-invalid]" | "[data-required]";

export type SelectValueSelectors = "[data-placeholder]";

export type SwitchSelectors = "[data-selected]" | "[data-hovered]" | "[data-pressed]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | "[data-readonly]";

export type TableSelectors = "[data-focused]" | "[data-focus-visible]" | "[data-drop-target]";

export type ColumnSelectors = "[data-hovered]" | "[data-focused]" | "[data-focus-visible]" | "[data-allows-sorting]" | '[data-sort-direction="ascending"]' | '[data-sort-direction="descending"]' | "[data-resizing]";

export type ColumnResizerSelectors = "[data-hovered]" | "[data-focused]" | "[data-focus-visible]" | "[data-resizing]" | '[data-resizable-direction="right"]' | '[data-resizable-direction="left"]' | '[data-resizable-direction="both"]';

export type TableBodySelectors = "[data-empty]" | "[data-drop-target]";

export type RowSelectors = "[data-hovered]" | "[data-pressed]" | "[data-selected]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | '[data-selection-mode="single"]' | '[data-selection-mode="multiple"]' | "[data-allows-dragging]" | "[data-dragging]" | "[data-drop-target]";

export type CellSelectors = "[data-pressed]" | "[data-focused]" | "[data-focus-visible]" | "[data-hovered]";

export type TabsSelectors = '[data-orientation="horizontal"]' | '[data-orientation="vertical"]';

export type TabListSelectors = '[data-orientation="horizontal"]' | '[data-orientation="vertical"]';

export type TabSelectors = "[data-hovered]" | "[data-pressed]" | "[data-selected]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]";

export type TabPanelSelectors = "[data-focused]" | "[data-focus-visible]" | "[data-inert]";

export type TagListSelectors = "[data-empty]" | "[data-focused]" | "[data-focus-visible]";

export type TagSelectors = "[data-allows-removing]";

export type TextFieldSelectors = "[data-disabled]" | "[data-invalid]" | "[data-readonly]" | "[data-required]";

export type ToggleButtonSelectors = "[data-hovered]" | "[data-pressed]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | "[data-selected]";

export type ToolbarSelectors = ;

export type TooltipSelectors = '[data-placement="left"]' | '[data-placement="right"]' | '[data-placement="top"]' | '[data-placement="bottom"]' | "[data-entering]" | "[data-exiting]";

export type TreeSelectors = "[data-empty]" | "[data-focused]" | "[data-focus-visible]";

export type TreeItemContentSelectors = "[data-hovered]" | "[data-pressed]" | "[data-selected]" | "[data-focused]" | "[data-focus-visible]" | "[data-disabled]" | '[data-selection-mode="single"]' | '[data-selection-mode="multiple"]' | "[data-allows-dragging]" | "[data-dragging]" | "[data-drop-target]";

