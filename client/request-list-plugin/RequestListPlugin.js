'use strict';

function createSVGIcon() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  svg.setAttribute("viewBox", "0 0 512 512");
  svg.setAttribute("version", "1.1");
  svg.setAttribute("width", "12");
  svg.setAttribute("height", "16");
  svg.setAttribute("aria-hidden", "true");

  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("fill-rule", "evenodd");
  path.setAttribute("d",
    "M445,386.7l-84.8-85.9c13.8-24.1,21-50.9,21-77.9c0-87.6-71.2-158.9-158.6-158.9C135.2,64,64,135.3,64,222.9  c0,87.6,71.2,158.9,158.6,158.9c27.9,0,55.5-7.7,80.1-22.4l84.4,85.6c1.9,1.9,4.6,3.1,7.3,3.1c2.7,0,5.4-1.1,7.3-3.1l43.3-43.8  C449,397.1,449,390.7,445,386.7z M222.6,125.9c53.4,0,96.8,43.5,96.8,97c0,53.5-43.4,97-96.8,97c-53.4,0-96.8-43.5-96.8-97  C125.8,169.4,169.2,125.9,222.6,125.9z");

  svg.appendChild(path);

  return svg;
}

async function requestRepositoryData() {
  const url = 'https://api.github.com/users/camunda/repos';
  const response = await fetch(url);
  const repos = await response.json();
  return repos;
}

export default function RequestListPlugin(eventBus, propertiesPanel, propertiesProvider) {
  eventBus.on(`import.done`, function () {
   
    propertiesPanel
    propertiesProvider
    
    debugger;
    const button = document.createElement("button");
    button.classList.add("action-button")
    button.attributes["data-action"] = "open-github-search";
    button.classList.add("open-search")
    button.appendChild(createSVGIcon());

    button.style.backgroundColor = "transparent";
    button.style.border = "none";
    button.style.right = "24px";
    button.style.display = "flex";
    button.style.cursor = "pointer";

    const camundaId = document.querySelector("#camunda-id");
    camundaId.classList.add("with-search");
    camundaId.parentElement.appendChild(button);

    const modal = document.createElement("div");

    let data;

    modal.innerHTML = `
      <div class="search-modal center-block absolute-center is-fixed is-variable modal is-small" id="fixed-modal">
        <div class="center-content" style="z-index: 3000;">
          <button id="close-modal" class="close-modal">&times;</button>
          <div class="input-container">
            <input type="text" class="search-input" id="search-input" style="z-index: 2000" />
          </div>
          <ul class='repo-list'></ul>
        </div>
      </div>
    `;

    const search = modal.querySelector("#search-input");
    const close = modal.querySelector("#close-modal");
    const repoList = modal.querySelector('.repo-list');

    function showModal() {
      document.body.appendChild(modal);
    }

    function closeModal() {
      modal.remove();
    }

    function setIdContent(id, value) {
      camundaId.value = `process_${id}_${value}`;
    }

    function filterList(filter) {
      if (filter) {
        return data.filter(d => d.full_name.includes(filter))
      }
      return data;
    }

    function renderData(data) {
      repoList.innerHTML = "";

      const fragment = document.createDocumentFragment();
      data.forEach(({ id, full_name }) => {
        const li = document.createElement("li");

        li.classList.add('repo-item');
        li.dataset['id'] = id;
        li.dataset['value'] = full_name;
        li.innerHTML = `
              <span>${full_name}</span>
              <button class='btn-select-repo'>
                &#8658;
              </button>
            `;
        fragment.appendChild(li);
      });

      repoList.append(fragment);
    }

    repoList.addEventListener("click", function (e) {
      const target = e.target;
      if (target.classList.contains("btn-select-repo")) {
        const parent = target.parentElement;
        setIdContent(parent.dataset["id"], parent.dataset["value"]);
        closeModal();
      }
    });

    close.addEventListener("click", closeModal);

    search.addEventListener("input", function (e) {
      e.stopPropagation();
      console.log(e.target.value);
      renderData(filterList(e.target.value));
    });

    button.addEventListener("click", function (e) {
      showModal();
      search.click();
      search.focus();

      requestRepositoryData().then(repos => {
        data = repos;
        renderData(data);
      });

    });
  });
}

RequestListPlugin.$inject = [
  'eventBus',
  'propertiesPanel',
  'propertiesProvider'
];