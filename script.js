  // Get the button element
  const topButton = document.getElementById("backToTopBtn");

  // When the user scrolls down 300px from the top of the document, show the button
  window.onscroll = function() {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

  // Smooth scroll back to the top
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


     // Execution Runtime Global Variables Config Array Dictionary States
        const configurationSystemState = {
            activeTheme: "dark",
            activePersona: "dev",
            activeStack: "node",
            activeCategory: "email"
        };

        // Static Copy Templates Matrix Core
        const personaVisualCopyBlockDataset = {
            dev: {
                left: `<div style="display: flex; flex-direction: column; gap: 16px;">
                        <span class="badge-pill-micro" style="align-self: flex-start;">Standardizing Implementation Architecture</span>
                        <h4 style="font-size: 24px; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em;">Stop Writing Custom Integration Adapters Every Quarter</h4>
                        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Software engineers waste up to 35% of core implementation sprints building structural custom webhooks, normalizing data payload formatting anomalies, and debugging raw response codes across mismatched vendor SDK updates. ApiNexus aggregates these layers into a single immutable specification contract loop mapping system.</p>
                       </div>`,
                right: `<div style="background-color: var(--bg-surface-tertiary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11.5px; color: var(--text-primary); overflow-x: auto;">
                            <div><span class="syntax-comment">// Instantiate application orchestrator safely with unified token parameters</span></div>
                            <div><span class="syntax-keyword">const</span> ApiNexusNode = <span class="syntax-func">require</span>(<span class="syntax-string">'@apinexus/enterprise-core'</span>);</div>
                            <div><span class="syntax-keyword">const</span> gatewayClient = <span class="syntax-keyword">new</span> <span class="syntax-func">ApiNexusNode</span>({ credentialToken: <span class="syntax-string">"nexus_live_v2"</span> });</div>
                            <br>
                            <div><span class="syntax-keyword">const</span> trackingOutput = <span class="syntax-keyword">await</span> gatewayClient.<span class="syntax-func">dispatchQuery</span>({</div>
                            <div>  domainClass: <span class="syntax-string">"payments"</span>,</div>
                            <div>  targetEngine: <span class="syntax-string">"stripe"</span>,</div>
                            <div>  payloadContext: { totalCents: <span class="syntax-var">9500</span>, isoCurrency: <span class="syntax-string">"usd"</span> }</div>
                            <div>});</div>
                        </div>`
            },
            pm: {
                left: `<div style="display: flex; flex-direction: column; gap: 16px;">
                        <span class="badge-pill-micro" style="align-self: flex-start; color: var(--accent-success); background-color: rgba(16,185,129,0.12);">Optimizing Sprints & Margins</span>
                        <h4 style="font-size: 24px; font-weight: 700; color: var(--text-primary); letter-spacing: -0.02em;">Accelerate Time-to-Market Vectors without Engineering Drag</h4>
                        <p style="font-size: 14px; color: var(--text-secondary); line-height: 1.6;">Strategic business agility scales down instantly when migrations dictate cross-contract evaluations, lengthy multi-vendor procurement reviews, and fragile application integration cycles. ApiNexus creates full structural validation redundancy parity arrays on day one.</p>
                       </div>`,
                right: `<div style="background-color: var(--bg-surface-secondary); border: 1px solid var(--border-color); padding: 24px; border-radius: 12px; display: flex; flex-direction: column; gap: 16px;">
                            <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: var(--text-primary);">Quarterly Operational System Overhead Savings Tracking Map</div>
                            <div style="display: flex; flex-direction: column; gap: 6px;">
                                <div style="display: flex; justify-content: space-between; font-size: 11px;"><span style="color: var(--text-secondary)">Engineering Backlog Reductions</span><span style="color: var(--accent-success); font-weight: 700; font-family: 'JetBrains Mono'">+18 Sprints Saved</span></div>
                                <div style="background-color: var(--bg-surface-tertiary); height: 6px; border-radius: 3px; overflow: hidden;"><div style="background-color: var(--accent-success); width: 88%; height: 100%;"></div></div>
                            </div>
                            <div style="display: flex; flex-direction: column; gap: 6px;">
                                <div style="display: flex; justify-content: space-between; font-size: 11px;"><span style="color: var(--text-secondary)">Multi-Region High Availability Failover Parity</span><span style="color: var(--brand-primary); font-weight: 700; font-family: 'JetBrains Mono'">100% Active Active</span></div>
                                <div style="background-color: var(--bg-surface-tertiary); height: 6px; border-radius: 3px; overflow: hidden;"><div style="background-color: var(--brand-primary); width: 100%; height: 100%;"></div></div>
                            </div>
                            <div style="background-color: var(--bg-surface-tertiary); padding: 12px; border-radius: 6px; font-size: 11px; color: var(--text-secondary); border-left: 3px solid var(--brand-primary)">
                                <i class="fa-solid fa-circle-info" style="color: var(--brand-primary); margin-right: 6px;"></i> Active Protocol Rule: If SendGrid API service availability drops beneath 99.95%, operational traffic flows dynamically auto-reroute to Postmark proxies.
                            </div>
                        </div>`
            }
        };

        // Fully Populated 21 Third-Party Integration Vector Mapping Dictionary Dataset
        const databaseServiceProvidersRegistry = {
            email: ["sendgrid", "postmark", "mailgun"],
            messaging: ["twilio", "sinch", "infobip"],
            payments: ["stripe", "paypal", "adyen"],
            banking: ["plaid", "tink", "yodlee"],
            crm: ["hubspot", "salesforce", "zoho crm"],
            ai: ["openai", "anthropic", "cohere"],
            cloud: ["aws core", "google cloud", "digitalocean"]
        };

        // Handcrafted Core Structural Code Snippets Formatting Parameters
        const matrixCodeBlueprintsDataset = {
            node: {
                email: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Triggering standardized abstraction single-token transmission parameter routing templates\nclientInstance.email.sendHTML({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  targetRecipient: "customer_entity@domain.com",\n  subjectHeader: "Transaction Context Validation Pipeline Sync Run",\n  htmlContainerElement: "&lt;h1&gt;System Payload Structural Mapping Verified Pass&lt;/h1&gt;"\n}).then(res =&gt; console.log(res));`,
                messaging: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Relaying multi-region packet strings via global gateway proxies cleanly\nclientInstance.messaging.dispatchWhatsapp({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  destinationNumber: "+15559821102",\n  bodyStringPayload: "System dynamic lifecycle security updates validation hash verification link."\n}).then(res =&gt; console.log(res));`,
                payments: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Executing ledger transaction loops under isolated security environment protocols\nclientInstance.payments.processCharge({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  totalCentsAmount: 9500,\n  isoCurrencyCode: "usd",\n  tokenizedCardRef: "tok_secure_network_payment_string"\n}).then(res =&gt; console.log(res));`,
                banking: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Sweeping open banking verification account data structures via single token keys\nclientInstance.banking.fetchLedgerStatements({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  targetAccountRefId: "acc_99a8_vault_node_sync",\n  calendarPeriodFilter: "2026-Q2"\n}).then(res =&gt; console.log(res));`,
                crm: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Synchronizing real-time customer pipeline attributes inside underlying CRM arrays\nclientInstance.crm.reconcileLeadRecord({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  entityAccountEmail: "lead_prospect@company.org",\n  attributesMappingTree: { currentTier: "Enterprise Plus Matrix", status: "Active_Closed" }\n}).then(res =&gt; console.log(res));`,
                ai: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Routing system variables safely across modern dynamic unified LLM inference arrays\nclientInstance.ai.compilePromptCompletion({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  instructModelProfile: "instruct-model-v6-stable",\n  promptQueryString: "Parse and aggregate incoming metadata log telemetry properties."\n}).then(res =&gt; console.log(res));`,
                cloud: `const ApiNexus = require('@apinexus/node-core');\nconst clientInstance = new ApiNexus.Client({ masterKey: process.env.NEXUS_TOKEN });\n\n// Provisioning object block file containers across decentralized cloud clusters\nclientInstance.cloud.instantiateBucket({\n  abstractProviderTarget: "<span class="syntax-var">{{PROVIDER}}</span>",\n  bucketIdentiferTag: "nexus-production-storage-node-04",\n  hardwareDataZoneRegion: "us-west-primary-isolated"\n}).then(res =&gt; console.log(res));`
            },
            python: {
                email: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\n# Instantiate core python runtime wrapper leveraging single master secure token properties\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nemail_pipeline_status = gateway_client.email.send_html(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    recipient_address="customer_entity@domain.com",\n    subject_header="Transaction Context Validation Pipeline Sync Run",\n    html_body_markup="&lt;h1&gt;System Payload Structural Mapping Verified Pass&lt;/h1&gt;"\n)\nprint(email_pipeline_status)`,
                messaging: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nmessage_relay_data = gateway_client.messaging.dispatch_whatsapp(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    to_phone_number="+15559821102",\n    body_payload_string="System dynamic lifecycle security updates validation hash verification link."\n)\nprint(message_relay_data)`,
                payments: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nledger_transaction_receipt = gateway_client.payments.process_charge(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    amount_cents=9500,\n    currency_iso_code="usd",\n    source_token_ref="tok_secure_network_payment_string"\n)\nprint(ledger_transaction_receipt)`,
                banking: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nbanking_ledger_extract = gateway_client.banking.fetch_ledger_statements(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    account_reference_id="acc_99a8_vault_node_sync",\n    calendar_period_filter="2026-Q2"\n)\nprint(banking_ledger_extract)`,
                crm: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\ncrm_reconciliation_output = gateway_client.crm.reconcile_lead_record(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    account_email_key="lead_prospect@company.org",\n    attributes_payload_dict={"currentTier": "Enterprise Plus Matrix", "status": "Active_Closed"}\n)\nprint(crm_reconciliation_output)`,
                ai: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\nneural_model_completion = gateway_client.ai.compile_prompt_completion(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    model_profile_string="instruct-model-v6-stable",\n    query_prompt_text="Parse and aggregate incoming metadata log telemetry properties."\n)\nprint(neural_model_completion)`,
                cloud: `import os\nfrom apinexus import ApiNexusOrchestrationClient\n\ngateway_client = ApiNexusOrchestrationClient(secret_key=os.environ.get("NEXUS_TOKEN"))\n\ncloud_bucket_object_receipt = gateway_client.cloud.instantiate_bucket(\n    abstract_provider_target="<span class="syntax-var">{{PROVIDER}}</span>",\n    bucket_tag_id="nexus-production-storage-node-04",\n    data_region_zone_specification="us-west-primary-isolated"\n)\nprint(cloud_bucket_object_receipt)`
            }
        };

        // UI Light/Dark Custom Controller Module Logic
        const masterThemeBtn = document.getElementById('masterThemeBtn');
        const themeIconSlot = document.getElementById('themeIconSlot');
        const themeLabelText = document.getElementById('themeLabelText');
        const htmlNodeTagElement = document.documentElement;

        masterThemeBtn.addEventListener('click', () => {
            if (configurationSystemState.activeTheme === "dark") {
                configurationSystemState.activeTheme = "light";
                htmlNodeTagElement.setAttribute('data-theme', 'light');
                themeIconSlot.className = "fa-solid fa-sun";
                themeLabelText.textContent = "Light Laboratory Mode";
            } else {
                configurationSystemState.activeTheme = "dark";
                htmlNodeTagElement.setAttribute('data-theme', 'dark');
                themeIconSlot.className = "fa-solid fa-moon";
                themeLabelText.textContent = "Dark Mode";
            }
        });

        // Target Persona Toggle Rendering Engine Loops
        const devBtn = document.getElementById('personaDevBtn');
        const pmBtn = document.getElementById('personaPmBtn');
        const gridViewSlot = document.getElementById('personaDisplayGrid');

        function drawTargetPersonaLayoutView(personaKey) {
            configurationSystemState.activePersona = personaKey;
            const targetCopyDataset = personaVisualCopyBlockDataset[personaKey];
            gridViewSlot.innerHTML = targetCopyDataset.left + targetCopyDataset.right;
            
            if (personaKey === 'dev') {
                devBtn.classList.add('active');
                pmBtn.classList.remove('active');
            } else {
                pmBtn.classList.add('active');
                devBtn.classList.remove('active');
            }
        }
        devBtn.addEventListener('click', () => drawTargetPersonaLayoutView('dev'));
        pmBtn.addEventListener('click', () => drawTargetPersonaLayoutView('pm'));

        // Laboratory Testing Console Framework Control Core Systems Elements
        const routeSelectField = document.getElementById('routeSelectField');
        const downstreamDropdownField = document.getElementById('downstreamDropdownField');
        const volSlider = document.getElementById('volSimulationSlider');
        const sliderLabel = document.getElementById('sliderValueText');
        const codeCanvas = document.getElementById('codePayloadCanvas');
        const terminalLogs = document.getElementById('telemetryTerminalLogs');

        function rebuildDropdownOptionsArrayDeck(categoryKey) {
            const approvedVendorsList = databaseServiceProvidersRegistry[categoryKey];
            downstreamDropdownField.innerHTML = "";
            
            approvedVendorsList.forEach((vendor) => {
                const opt = document.createElement('option');
                opt.value = vendor;
                opt.textContent = ` Proxy Tunnel Router Source Edge ── ${vendor}`;
                downstreamDropdownField.appendChild(opt);
            });
            syncTerminalCodeDisplayCanvas();
        }

        function syncTerminalCodeDisplayCanvas() {
            const pickedCategory = routeSelectField.value;
            const activeStack = configurationSystemState.activeStack;
            const pickedVendor = downstreamDropdownField.value || "unknown";
            
            let sourceStringTemplate = matrixCodeBlueprintsDataset[activeStack][pickedCategory];
            sourceStringTemplate = sourceStringTemplate.replace("{{PROVIDER}}", pickedVendor);
            
            codeCanvas.innerHTML = sourceStringTemplate;
            document.getElementById('extensionLabelSlot').textContent = activeStack === 'node' ? 'nexus_core.js' : 'nexus_core.py';
        }

        function updateActiveStackSlot(stackKey) {
            configurationSystemState.activeStack = stackKey;
            const btnNode = document.getElementById('stackBtnNode');
            const btnPy = document.getElementById('stackBtnPy');
            
            if (stackKey === 'node') {
                btnNode.classList.add('active');
                btnPy.classList.remove('active');
            } else {
                btnPy.classList.add('active');
                btnNode.classList.remove('active');
            }
            syncTerminalCodeDisplayCanvas();
        }

        // Connect Event Interaction Handlers Mappings
        routeSelectField.addEventListener('change', (e) => rebuildDropdownOptionsArrayDeck(e.target.value));
        downstreamDropdownField.addEventListener('change', () => syncTerminalCodeDisplayCanvas());
        volSlider.addEventListener('input', (e) => {
            sliderLabel.textContent = `${Number(e.target.value).toLocaleString()} calls / min`;
        });

        // Real-Time Diagnostic Execution Matrix Generation Logger Simulator Loop Routine
        function triggerExecutionSimulationTrace() {
            const currentRouteClassId = routeSelectField.value;
            const parsedVendorTargetId = downstreamDropdownField.value || "unknown";
            const currentPacketDensityValue = Number(volSlider.value).toLocaleString();
            const randomlyComputedLatencyMetric = Math.floor(Math.random() * 24) + 8;
            
            terminalLogs.textContent = `[TRANSACTION LOOP INITIALIZED] Scanning structural verification checksum arrays for dynamic parameters verification...\n`;
            
            setTimeout(() => {
                terminalLogs.textContent += `[EDGE DEPLOYMENT MATCHED] Extracted active context credentials. Encapsulating private authentication keys safely inside HSM envelopes...\n`;
            }, 180);

            setTimeout(() => {
                terminalLogs.textContent += `[ROUTING PIPELINE ACTIVE] Relaying unified structural query variables down target endpoint data lines...\n`;
            }, 420);

            setTimeout(() => {
                terminalLogs.textContent += `\n==================================================================================================\n`;
                terminalLogs.textContent += `➔ INCOMING GATEWAY HTTP CODE : 200 SUCCESS STATUS CLEAR\n`;
                terminalLogs.textContent += `➔ CORE SYSTEM ROUTE ENDPOINT : api.apinexus.engine/v1/gateway/orchestrate/${currentRouteClassId}\n`;
                terminalLogs.textContent += `➔ DELEGATED PROCESSING NODE  : isolation-vault://secure-hardware-module-fips/${parsedVendorTargetId}\n`;
                terminalLogs.textContent += `➔ PIPELINE PACKET FLUX LOAD  : Real-time traffic parsing running smooth at ${currentPacketDensityValue} ops / minute\n`;
                terminalLogs.textContent += `➔ COMPUTED EDGE PROXY CYCLE  : Operational bus latency tracked at ${randomlyComputedLatencyMetric}ms (99.998% Data Integrity Metric Pass)\n`;
                terminalLogs.textContent += `==================================================================================================\n`;
                terminalLogs.textContent += `\n>> Active integration telemetry pipeline trace tracking complete. Edge proxy structures standing by in loop parameters.`;
            }, 750);
        }

        /* ==========================================================================
           NEW FUNCTIONS: NAVIGATION AND SIMULATED DISPATCH FOR REQUEST QUOTE
           ========================================================================== */
        function navigateToQuoteForm(serviceValue) {
            const selectElement = document.getElementById('quoteServiceSelect');
            if (selectElement) {
                selectElement.value = serviceValue;
            }
            const quoteSection = document.getElementById('quote-desk');
            if (quoteSection) {
                quoteSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        function handleQuoteFormDispatch(event) {
            event.preventDefault();
            const selectedService = document.getElementById('quoteServiceSelect').value;
            const terminal = document.getElementById('quoteTerminalResponse');
            
            terminal.style.color = "var(--accent-success)";
            terminal.textContent = `[QUOTE SUBSYSTEM INITIALIZED]\nEncoding enterprise topology specifications...\n`;
            
            setTimeout(() => {
                terminal.textContent += `[LEDGER COMMITTED] Intent metrics saved to regional isolation rings.\n`;
            }, 250);

            setTimeout(() => {
                terminal.textContent += `\n===========================================\n`;
                terminal.textContent += `STATUS     : 202 ACCEPTED\n`;
                terminal.textContent += `BUS MATRIX : ${selectedService.toUpperCase()}_VERTICAL_CORE\n`;
                terminal.textContent += `SLA LINE   : Tier-1 Multi-Acquirer Guaranteed\n`;
                terminal.textContent += `===========================================\n`;
                terminal.textContent += `\nAn enterprise account solution engineer will deliver your custom contract parameters shortly.`;
            }, 600);
        }

        // Baseline Document Activation Hooks Mount
        window.onload = () => {
            drawTargetPersonaLayoutView('dev');
            rebuildDropdownOptionsArrayDeck('email');
        };

        // Interactive Scroll Parallax for Dashboard Mockup
        window.addEventListener('scroll', () => {
            const dashboard = document.getElementById('parallaxDashboard');
            if (!dashboard) return;
            
            const rect = dashboard.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const sectionProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
            
            if (sectionProgress >= 0 && sectionProgress <= 1) {
                const currentScale = 0.75 + (sectionProgress * 0.25);
                const currentRotationX = 20 - (sectionProgress * 20);
                dashboard.style.transform = `scale(${Math.min(currentScale, 1)}) rotateX(${Math.max(currentRotationX, 0)}deg)`;
            }
        });

        document.addEventListener("DOMContentLoaded", () => {
            const scrollSections = document.querySelectorAll(".matrix-scroll-section");
            const sidebarLinks = document.querySelectorAll("#matrixScrollSidebar .matrix-nav-item");

            const observerOptions = {
                root: null, 
                rootMargin: "-25% 0px -55% 0px", 
                threshold: 0
            };

            const matrixScrollObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const targetId = entry.target.getAttribute("id");

                        scrollSections.forEach(section => section.classList.remove("in-view"));
                        entry.target.classList.add("in-view");

                        sidebarLinks.forEach(link => {
                            link.classList.remove("active");
                            if (link.getAttribute("href") === `#${targetId}`) {
                                link.classList.add("active");
                                if (window.innerWidth <= 992) {
                                    link.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                                }
                            }
                        });
                    }
                });
            }, observerOptions);

            scrollSections.forEach(section => matrixScrollObserver.observe(section));
        });
