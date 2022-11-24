import { Theme, ThemeOptions, ThemeSpacing } from '@emotion/react';

function createSpacingFn(stepSize: number): ThemeSpacing {
  return (...args: number[]) => {
    return args
      .slice(0, 4)
      .filter(arg => arg !== undefined)
      .map(arg => `${arg * stepSize}px`)
      .join(' ');
  };
}

export function createTheme({ palette, spacing }: ThemeOptions): Theme {
  return {
    palette,
    spacing: createSpacingFn(spacing),
  };
}

export function prefixedClassNames<T extends string>(
  prefix: string,
  classes: T[]
): Record<T, string> {
  const classesMap = {} as Record<T, string>;

  for (const cls of classes) {
    classesMap[cls] = `${prefix}-${cls}`;
  }

  return Object.freeze(classesMap);
}
