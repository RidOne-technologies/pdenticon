import { polkadotIcon, beachballIcon } from '@polkadot/ui-shared';

export function renderCircle({ cx, cy, fill, r }, key) {
  let svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="${cx}"  cy="${cy}" fill="${fill}"  r="${r}" />
                    </svg>`
  return svg
}

export function renderPolkadotIdenticon(
  address,
  className = '',
  isAlternative = false,
  size,
  style,
) {
  return `<svg
                  class=${className}
                  height=${size}
                  id=${address}
                  name=${address}
                  style=${style}
                  viewBox='0 0 64 64'
                  width=${size}>
                        ${polkadotIcon(address, { isAlternative }).map(
                          renderCircle,
                        )}
                </svg>`;
}

export function renderBeachballIdenticon(
  address,
  isAlternative = false,
  size,
) {
  let generatedBeachballIcon = beachballIcon(address, {
    isAlternative: isAlternative,
    size,
  })
  return generatedBeachballIcon.innerHTML;
}
