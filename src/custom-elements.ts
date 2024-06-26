// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type {Container} from '@microsoft/fast-foundation';
import {vsCodeBadge} from './badge/index';
import {vsCodeButton} from './button/index';
import {vsCodeCheckbox} from './checkbox/index';
import {
	vsCodeDataGrid,
	vsCodeDataGridCell,
	vsCodeDataGridRow,
} from './data-grid/index';
import {vsCodeDivider} from './divider/index';
import {vsCodeDropdown} from './dropdown/index';
import {vsCodeLink} from './link/index';
import {vsCodeOption} from './option/index';
import {vsCodePanels, vsCodePanelTab, vsCodePanelView} from './panels/index';
import {vsCodeProgressRing} from './progress-ring/index';
import {vsCodeRadioGroup} from './radio-group/index';
import {vsCodeRadio} from './radio/index';
import {vsCodeTag} from './tag/index';
import {vsCodeTextArea} from './text-area/index';
import {vsCodeTextField} from './text-field/index';

// Don't delete these. They're needed so that API-extractor doesn't add import types
// with improper pathing
/* eslint-disable @typescript-eslint/no-unused-vars */
import type {Badge} from './badge/index';
import type {Button} from './button/index';
import type {Checkbox} from './checkbox/index';
import type {DataGrid, DataGridCell, DataGridRow} from './data-grid/index';
import type {Divider} from './divider/index';
import type {Dropdown} from './dropdown/index';
import type {Link} from './link/index';
import type {Option} from './option/index';
import type {Panels, PanelTab, PanelView} from './panels/index';
import type {ProgressRing} from './progress-ring/index';
import type {RadioGroup} from './radio-group/index';
import type {Radio} from './radio/index';
import type {Tag} from './tag/index';
import type {TextArea} from './text-area/index';
import type {TextField} from './text-field/index';

// export all components
export {
	vsCodeBadge,
	vsCodeButton,
	vsCodeCheckbox,
	vsCodeDataGrid,
	vsCodeDataGridCell,
	vsCodeDataGridRow,
	vsCodeDivider,
	vsCodeDropdown,
	vsCodeLink,
	vsCodeOption,
	vsCodePanels,
	vsCodePanelTab,
	vsCodePanelView,
	vsCodeProgressRing,
	vsCodeRadioGroup,
	vsCodeRadio,
	vsCodeTag,
	vsCodeTextArea,
	vsCodeTextField,
};

/**
 * All VSCode Web Components
 * @public
 * @remarks
 * This object can be passed directly to the Design System's `register` method to
 * statically link and register all available components.
 */
export const allComponents = {
	vsCodeBadge,
	vsCodeButton,
	vsCodeCheckbox,
	vsCodeDataGrid,
	vsCodeDataGridCell,
	vsCodeDataGridRow,
	vsCodeDivider,
	vsCodeDropdown,
	vsCodeLink,
	vsCodeOption,
	vsCodePanels,
	vsCodePanelTab,
	vsCodePanelView,
	vsCodeProgressRing,
	vsCodeRadioGroup,
	vsCodeRadio,
	vsCodeTag,
	vsCodeTextArea,
	vsCodeTextField,
	register(container?: Container, ...rest: any[]) {
		if (!container) {
			// preserve backward compatibility with code that loops through
			// the values of this object and calls them as funcs with no args
			return;
		}

		for (const key in this) {
			if (key === 'register') {
				continue;
			}

			(this as any)[key]().register(container, ...rest);
		}
	},
};
