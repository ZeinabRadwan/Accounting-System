<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>System Update</title>
    <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
    <style>
        :root { --su-bg:#0b1325; --su-card:#111a2e; --su-soft:#1a2540; --su-text:#e6ecff; --su-muted:#9fb0d8; --su-accent:#4f7cff; --su-accent-2:#22d3ee; --su-danger:#ef4444; }
        body { background: radial-gradient(1200px 600px at 20% -10%, #14244d 0%, transparent 60%), radial-gradient(1000px 600px at 120% 10%, #0f2a5a 0%, transparent 60%), var(--su-bg); color: var(--su-text); }
        .su-container { max-width: 1024px; }
        .su-card { background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06); backdrop-filter: blur(8px); }
        .su-title { font-weight: 700; letter-spacing: 0.3px; margin: 0; }
        .su-sub { color: var(--su-muted); font-size: 0.95rem; }
        .su-list { margin: 0; padding: 0; list-style: none; }
        .su-item { display: flex; align-items: center; justify-content: space-between; padding: 16px 18px; border-top: 1px solid rgba(255,255,255,0.06); }
        .su-item:first-child { border-top: 0; }
        .su-item h6 { margin: 0 0 4px; font-weight: 600; }
        .su-item p { margin: 0; color: var(--su-muted); font-size: 0.9rem; }
        .su-actions { display: flex; align-items: center; gap: 10px; }
        .su-input { background: var(--su-soft); border: 1px solid rgba(255,255,255,0.08); color: var(--su-text); padding: 10px 12px; border-radius: 10px; min-width: 260px; }
        .su-btn { appearance: none; border: 0; padding: 10px 14px; border-radius: 12px; font-weight: 600; cursor: pointer; transition: transform .05s ease, background .2s ease, color .2s ease, border .2s ease; }
        .su-btn:active { transform: scale(0.98); }
        .su-btn-ghost { background: transparent; color: var(--su-text); border: 1px solid rgba(255,255,255,0.12); }
        .su-badge { display:inline-flex; align-items:center; gap:6px; font-size:.75rem; padding:4px 8px; border-radius:999px; background:rgba(79,124,255,0.12); color:#c8d6ff; border:1px solid rgba(79,124,255,0.25); }
        /* Toggle switch */
        .su-switch { position: relative; width: 56px; height: 32px; }
        .su-switch input { display: none; }
        .su-slider { position: absolute; inset: 0; background: #233056; border: 1px solid rgba(255,255,255,0.08); border-radius: 999px; box-shadow: inset 0 3px 8px rgba(0,0,0,0.25); transition: background .25s ease, border .25s ease; }
        .su-slider::after { content: ""; position: absolute; top: 50%; left: 6px; width: 22px; height: 22px; border-radius: 50%; background: linear-gradient(180deg, #ffffff, #dfe7ff); box-shadow: 0 4px 12px rgba(0,0,0,0.35); transform: translateY(-50%); transition: left .25s ease, background .25s ease; }
        .su-switch input:checked + .su-slider { background: linear-gradient(90deg, var(--su-accent), var(--su-accent-2)); border-color: transparent; }
        .su-switch input:checked + .su-slider::after { left: 28px; background: linear-gradient(180deg, #03244d, #0c1a33); }
        .grid-2 { display:grid; grid-template-columns: 1fr; gap: 16px; }
        @media (min-width: 992px){ .grid-2 { grid-template-columns: 1fr 1fr; } }
        .su-pre { background: rgba(255,255,255,0.04); color: var(--su-text); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; }
        .grid-2col { display: grid; grid-template-columns: 1fr; gap: 12px; }
        @media (min-width: 992px){ .grid-2col { grid-template-columns: 1fr 1fr; } }
        .su-item-card { border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 16px 18px; background: rgba(255,255,255,0.02); }
    </style>
</head>
<body>
<div class="container py-5 su-container">
    <div class="d-flex align-items-center justify-content-between mb-3">
        <div>
            <div class="su-badge">System Tools</div>
            <h1 class="mt-2 su-title">System Update</h1>
            <div class="su-sub">Direct, simple triggers for maintenance tasks. Use toggles to run instantly.</div>
        </div>
    </div>

    @if (session('status'))
        <div class="alert alert-success">{{ session('status') }}</div>
    @endif
    @if (session('error'))
        <div class="alert alert-danger">{{ session('error') }}</div>
    @endif
    @if ($errors->any())
        <div class="alert alert-danger">
            <ul class="mb-0">
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif

    <div class="su-card mb-3">
        <ul class="su-list grid-2col">
            <li class="su-item">
                <div>
                    <h6>Settings Switches</h6>
                    <p>Toggle values for each key; changes save instantly.</p>
                </div>
            </li>
            @foreach ($settings as $key => $value)
                @php
                    $isArray = is_array($value);
                    $isBool = is_bool($value);
                    $isInt = is_int($value);
                    $isString = is_string($value);
                    $isBoolishString = $isString && in_array(strtolower($value), ['true','false','1','0'], true);
                    $isScalar = !$isArray && (is_scalar($value) || is_null($value));
                    $checked = false;
                    if ($isBool) { $checked = $value; }
                    elseif ($isInt) { $checked = (int) $value === 1; }
                    elseif ($isString) { $checked = in_array(strtolower($value), ['true','1'], true); }
                    $isPairToggle = $isArray && count($value) >= 2 && is_bool($value[0]);
                @endphp
                @if ($isScalar)
                <li class="su-item su-item-card">
                    <div>
                        <h6>{{ $key }}</h6>
                        <p class="mb-0 su-sub">Current: <code>{{ is_bool($value) ? ($value ? 'true' : 'false') : (is_null($value) ? 'null' : (is_string($value) ? $value : json_encode($value))) }}</code></p>
                    </div>
                    <div class="su-actions">
                        <label class="su-switch" title="Toggle {{ $key }}">
                            <input type="checkbox" class="js-setting-toggle" data-setting-key="{{ $key }}" data-original-type="{{ $isBool ? 'bool' : ($isInt ? 'int' : ($isBoolishString ? 'boolish-string' : ($isString ? 'string' : 'other'))) }}" @if($checked) checked @endif>
                            <span class="su-slider"></span>
                        </label>
                    </div>
                </li>
                @endif
                @if ($isPairToggle)
                <li class="su-item su-item-card">
                    <div>
                        <h6>{{ $key }}</h6>
                        <p class="mb-0 su-sub">Toggle and provide value if required.</p>
                    </div>
                    <div class="su-actions">
                        <label class="su-switch" title="Toggle {{ $key }}">
                            <input type="checkbox" class="js-setting-pair-toggle" data-setting-key="{{ $key }}" @if($value[0]) checked @endif>
                            <span class="su-slider"></span>
                        </label>
                        <input type="text" class="su-input js-setting-pair-input" data-setting-key="{{ $key }}" placeholder="Value" value="{{ is_null($value[1]) ? '' : $value[1] }}">
                        @if($key === 'run_seeder' && count($value) >= 3)
                        <select class="su-input js-setting-seeder-type" data-setting-key="{{ $key }}" style="min-width: 150px;">
                            <option value="">Select Type</option>
                            <option value="central" @if(isset($value[2]) && $value[2] === 'central') selected @endif>Central</option>
                            <option value="tenant" @if(isset($value[2]) && $value[2] === 'tenant') selected @endif>Tenant</option>
                        </select>
                        @endif
                    </div>
                </li>
                @endif
            @endforeach
        </ul>
    </div>

    <hr class="my-4">
    <div class="d-flex align-items-center gap-2 mb-3">
        <button id="pushSettingsBtn" class="su-btn su-btn-ghost">Push settings</button>
        <button id="buildOnlyBtn" class="su-btn su-btn-ghost">Build only</button>
        <button id="pushBuildResultsBtn" class="su-btn su-btn-ghost">Push build results</button>
        <span id="pushSettingsMsg" class="su-sub"></span>
    </div>
    
    <div class="su-card mb-3">
        <div class="p-3">
            <h6 class="mb-2">Build Results</h6>
            <div id="buildResults" class="su-pre p-3" style="white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; max-height: 300px; overflow-y: auto; background: rgba(0,0,0,0.3);">No build executed yet. Click "Build only" to see results.</div>
        </div>
    </div>

    <!-- Git Sync Section -->
    <div class="su-card mb-3">
        <div class="p-3">
            <div class="d-flex align-items-center justify-content-between mb-3">
                <div>
                    <h6 class="mb-1">Git Sync</h6>
                    <p class="su-sub mb-0">Sync with remote repository - check status, pull, commit, and push changes</p>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <button id="gitStatusBtn" class="su-btn su-btn-ghost">Check Status</button>
                    <button id="gitPullBtn" class="su-btn su-btn-ghost">Pull</button>
                </div>
            </div>
            
            <!-- Git Status Display -->
            <div id="gitStatusDisplay" class="mb-3" style="display: none;">
                <div class="su-item-card">
                    <div class="d-flex align-items-center justify-content-between">
                        <div>
                            <h6 class="mb-1">Repository Status</h6>
                            <p class="su-sub mb-0" id="gitStatusText">Checking...</p>
                        </div>
                        <div class="d-flex align-items-center gap-2">
                            <span id="gitBranchBadge" class="su-badge"></span>
                            <span id="gitChangesBadge" class="su-badge" style="display: none;"></span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Commit Form -->
            <div id="gitCommitForm" class="mb-3" style="display: none;">
                <div class="su-item-card">
                    <h6 class="mb-2">Commit Changes</h6>
                    <div class="grid-2col">
                        <div>
                            <label class="form-label su-sub">Commit Title</label>
                            <input type="text" id="gitCommitTitle" class="su-input" placeholder="Enter commit title" value="Update from system">
                        </div>
                        <div>
                            <label class="form-label su-sub">Commit Message (optional)</label>
                            <input type="text" id="gitCommitMessage" class="su-input" placeholder="Enter commit message">
                        </div>
                    </div>
                    <div class="d-flex align-items-center gap-2 mt-2">
                        <button id="gitCommitBtn" class="su-btn su-btn-ghost">Commit</button>
                        <button id="gitPushBtn" class="su-btn su-btn-ghost" style="display: none;">Push</button>
                        <span id="gitActionMsg" class="su-sub"></span>
                    </div>
                </div>
            </div>

            <!-- Git Output -->
            <div id="gitOutput" class="su-pre p-3" style="white-space: pre-wrap; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace; max-height: 300px; overflow-y: auto; background: rgba(0,0,0,0.3); display: none;">No git operations executed yet. Click "Check Status" to see repository status.</div>
        </div>
    </div>
    <div class="mb-2" style="display:none;">
        <textarea id="settingsEditor" class="form-control su-pre" rows="12" style="white-space: pre; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;">{{ json_encode($settings, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES) }}</textarea>
    </div>
    <div class="d-flex align-items-center gap-2" style="display:none;">
        <button id="saveSettingsBtn" class="su-btn su-btn-ghost">Save Settings</button>
        <span id="saveSettingsMsg" class="su-sub"></span>
    </div>
</div>
<script>
    (function(){
        const csrf = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        const providedKey = "{{ $providedKey }}";
        function showMessage(text, type){
            const container = document.querySelector('.su-container');
            if (!container) return;
            const existing = document.getElementById('flash-msg');
            if (existing) existing.remove();
            const div = document.createElement('div');
            div.id = 'flash-msg';
            div.className = 'alert ' + (type === 'error' ? 'alert-danger' : 'alert-success');
            div.textContent = text;
            container.insertBefore(div, container.firstChild.nextSibling);
            setTimeout(()=>{ div.remove(); }, 5000);
        }
        // Removed toggle handlers since we only edit/save settings now.

        // Settings editor save
        const saveBtn = document.getElementById('saveSettingsBtn');
        const editor = document.getElementById('settingsEditor');
        const msg = document.getElementById('saveSettingsMsg');
        function setMsg(text, ok){ msg.textContent = text; msg.style.color = ok ? '#9fe2b0' : '#ef9a9a'; }
        let currentSettings;
        try { currentSettings = JSON.parse(editor.value || '{}'); } catch(e) { currentSettings = {}; }

        function coerceValueForToggle(originalType, isOn) {
            switch (originalType) {
                case 'bool': return !!isOn;
                case 'int': return isOn ? 1 : 0;
                case 'boolish-string': return isOn ? '1' : '0';
                case 'string': return isOn ? 'true' : 'false';
                default: return !!isOn;
            }
        }

        function saveSettings(newSettings, silent){
            if (!silent) setMsg('Saving...', true);
            return fetch("{{ route('system.update.settings.save') }}", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf,
                    'X-System-Update-Key': providedKey
                },
                body: JSON.stringify({ settings: newSettings, key: providedKey })
            }).then(async (res) => {
                const data = await res.json().catch(() => ({}));
                if (!res.ok) throw new Error(data.message || 'Failed to save');
                currentSettings = data.settings || newSettings;
                editor.value = JSON.stringify(currentSettings, null, 2);
                if (!silent) { setMsg('Saved successfully.', true); showMessage('Settings saved.', 'success'); }
                return data;
            }).catch(err => {
                if (!silent) { setMsg(err.message, false); showMessage(err.message, 'error'); }
                throw err;
            });
        }

        // Toggle handlers for each key
        document.querySelectorAll('.js-setting-toggle').forEach(cb => {
            cb.addEventListener('change', function(e){
                const key = e.target.getAttribute('data-setting-key');
                const originalType = e.target.getAttribute('data-original-type');
                const isOn = e.target.checked;
                currentSettings[key] = coerceValueForToggle(originalType, isOn);
                saveSettings(currentSettings, true).catch(() => {
                    // revert UI if save fails
                    e.target.checked = !isOn;
                });
            });
        });

        // Toggle/input handlers for pair keys
        document.querySelectorAll('.js-setting-pair-toggle').forEach(cb => {
            cb.addEventListener('change', function(e){
                const key = e.target.getAttribute('data-setting-key');
                const isOn = e.target.checked;
                const input = document.querySelector('.js-setting-pair-input[data-setting-key="' + key + '"]');
                const seederType = document.querySelector('.js-setting-seeder-type[data-setting-key="' + key + '"]');
                const val = input ? input.value : null;
                const type = seederType ? seederType.value : null;
                
                if (key === 'run_seeder' && seederType) {
                    currentSettings[key] = [!!isOn, val === '' ? null : val, type === '' ? null : type];
                } else {
                    currentSettings[key] = [!!isOn, val === '' ? null : val];
                }
                saveSettings(currentSettings, true).catch(() => {
                    e.target.checked = !isOn;
                });
            });
        });
        document.querySelectorAll('.js-setting-pair-input').forEach(inp => {
            function sync(){
                const key = inp.getAttribute('data-setting-key');
                const toggle = document.querySelector('.js-setting-pair-toggle[data-setting-key="' + key + '"]');
                const seederType = document.querySelector('.js-setting-seeder-type[data-setting-key="' + key + '"]');
                const isOn = !!(toggle && toggle.checked);
                const type = seederType ? seederType.value : null;
                
                if (key === 'run_seeder' && seederType) {
                    currentSettings[key] = [isOn, inp.value === '' ? null : inp.value, type === '' ? null : type];
                } else {
                    currentSettings[key] = [isOn, inp.value === '' ? null : inp.value];
                }
                saveSettings(currentSettings, true).catch(() => {
                    // leave input text; show message only
                });
            }
            inp.addEventListener('change', sync);
            inp.addEventListener('keyup', function(e){ if (e.key === 'Enter') sync(); });
            inp.addEventListener('blur', sync);
        });
        
        // Seeder type dropdown handler
        document.querySelectorAll('.js-setting-seeder-type').forEach(select => {
            select.addEventListener('change', function(e){
                const key = e.target.getAttribute('data-setting-key');
                const toggle = document.querySelector('.js-setting-pair-toggle[data-setting-key="' + key + '"]');
                const input = document.querySelector('.js-setting-pair-input[data-setting-key="' + key + '"]');
                const isOn = !!(toggle && toggle.checked);
                const val = input ? input.value : null;
                const type = e.target.value;
                
                currentSettings[key] = [isOn, val === '' ? null : val, type === '' ? null : type];
                saveSettings(currentSettings, true).catch(() => {
                    // revert selection if save fails
                    e.target.value = currentSettings[key][2] || '';
                });
            });
        });
        
        saveBtn?.addEventListener('click', function(){
            let jsonText = editor.value;
            let parsed;
            try {
                parsed = JSON.parse(jsonText);
            } catch (e) {
                setMsg('Invalid JSON: ' + e.message, false);
                return;
            }
            currentSettings = parsed;
            saveSettings(parsed, false);
        });

        // Push changes
        const pushBtn = document.getElementById('pushSettingsBtn');
        const buildOnlyBtn = document.getElementById('buildOnlyBtn');
        const pushBuildResultsBtn = document.getElementById('pushBuildResultsBtn');
        const pushMsg = document.getElementById('pushSettingsMsg');
        const buildResults = document.getElementById('buildResults');
        function setPushMsg(text, ok){ pushMsg.textContent = text; pushMsg.style.color = ok ? '#9fe2b0' : '#ef9a9a'; }
        
        function executeAction(url, actionName, showInResults = false) {
            setPushMsg(actionName + '...', true);
            if (showInResults) {
                buildResults.textContent = actionName + '...\n';
            }
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf,
                    'X-System-Update-Key': providedKey
                },
                body: JSON.stringify({ key: providedKey })
            }).then(async (res) => {
                const data = await res.json().catch(() => ({}));
                if (!res.ok) throw new Error(data.message || actionName + ' failed');
                setPushMsg(actionName + ' completed successfully.', true);
                showMessage(actionName + ' completed successfully.', 'success');
                
                if (showInResults && data && data.output) {
                    buildResults.textContent = data.output.join('\n');
                }
            }).catch(err => {
                setPushMsg(err.message, false);
                showMessage(err.message, 'error');
                if (showInResults) {
                    buildResults.textContent = 'Error: ' + err.message;
                }
            });
        }

        pushBtn?.addEventListener('click', function(){
            executeAction("{{ route('system.update.settings.push') }}", 'Pushing settings');
        });

        buildOnlyBtn?.addEventListener('click', function(){
            // Clear previous results
            buildResults.textContent = 'Starting build...\n';
            setPushMsg('Building...', true);
            
            // Use EventSource for real-time streaming
            const eventSource = new EventSource("{{ route('system.update.build.stream') }}?key=" + encodeURIComponent(providedKey));
            
            eventSource.onmessage = function(event) {
                const data = JSON.parse(event.data);
                
                if (data.type === 'start') {
                    buildResults.textContent = data.message + '\n';
                } else if (data.type === 'output') {
                    buildResults.textContent += data.message + '\n';
                    // Auto-scroll to bottom
                    buildResults.scrollTop = buildResults.scrollHeight;
                } else if (data.type === 'complete') {
                    buildResults.textContent += '\nBuild completed with exit code: ' + data.exit_code + '\n';
                    setPushMsg('Build completed successfully.', true);
                    showMessage('Build completed successfully.', 'success');
                    eventSource.close();
                } else if (data.type === 'error') {
                    buildResults.textContent += '\nError: ' + data.message + '\n';
                    setPushMsg('Build failed: ' + data.message, false);
                    showMessage('Build failed: ' + data.message, 'error');
                    eventSource.close();
                }
            };
            
            eventSource.onerror = function(event) {
                buildResults.textContent += '\nConnection error occurred.\n';
                setPushMsg('Build connection failed', false);
                showMessage('Build connection failed', 'error');
                eventSource.close();
            };
        });

        pushBuildResultsBtn?.addEventListener('click', function(){
            executeAction("{{ route('system.update.push.build.results') }}", 'Pushing build results');
        });

        // Git Sync functionality
        const gitStatusBtn = document.getElementById('gitStatusBtn');
        const gitPullBtn = document.getElementById('gitPullBtn');
        const gitCommitBtn = document.getElementById('gitCommitBtn');
        const gitPushBtn = document.getElementById('gitPushBtn');
        const gitStatusDisplay = document.getElementById('gitStatusDisplay');
        const gitCommitForm = document.getElementById('gitCommitForm');
        const gitOutput = document.getElementById('gitOutput');
        const gitStatusText = document.getElementById('gitStatusText');
        const gitBranchBadge = document.getElementById('gitBranchBadge');
        const gitChangesBadge = document.getElementById('gitChangesBadge');
        const gitActionMsg = document.getElementById('gitActionMsg');
        const gitCommitTitle = document.getElementById('gitCommitTitle');
        const gitCommitMessage = document.getElementById('gitCommitMessage');

        function setGitMsg(text, ok) {
            gitActionMsg.textContent = text;
            gitActionMsg.style.color = ok ? '#9fe2b0' : '#ef9a9a';
        }

        function showGitOutput(output) {
            gitOutput.style.display = 'block';
            gitOutput.textContent = output;
            gitOutput.scrollTop = gitOutput.scrollHeight;
        }

        function updateGitStatus(data) {
            gitStatusDisplay.style.display = 'block';
            gitBranchBadge.textContent = data.current_branch || 'unknown';
            
            let statusText = `Branch: ${data.current_branch || 'unknown'}`;
            let changesText = '';
            
            if (data.has_changes) {
                changesText = `${data.changes.length} uncommitted changes`;
                gitChangesBadge.textContent = changesText;
                gitChangesBadge.style.display = 'inline-flex';
                gitChangesBadge.style.background = 'rgba(239, 68, 68, 0.12)';
                gitChangesBadge.style.color = '#fca5a5';
                gitChangesBadge.style.borderColor = 'rgba(239, 68, 68, 0.25)';
            } else {
                gitChangesBadge.style.display = 'none';
            }
            
            if (data.has_remote_changes) {
                statusText += ' • Remote changes available';
            }
            
            if (data.has_local_commits) {
                statusText += ' • Local commits to push';
            }
            
            gitStatusText.textContent = statusText;
            
            // Show commit form if there are changes
            if (data.has_changes) {
                gitCommitForm.style.display = 'block';
            } else {
                gitCommitForm.style.display = 'none';
            }
            
            // Show push button if there are local commits to push
            if (data.has_local_commits) {
                gitPushBtn.style.display = 'inline-block';
            } else {
                gitPushBtn.style.display = 'none';
            }
        }

        function executeGitAction(url, actionName, data = {}) {
            setGitMsg(actionName + '...', true);
            showGitOutput(actionName + '...\n');
            
            return fetch(url, {
                method: data.method || 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': csrf,
                    'X-System-Update-Key': providedKey
                },
                body: data.body ? JSON.stringify(data.body) : undefined
            }).then(async (res) => {
                const responseData = await res.json().catch(() => ({}));
                if (!res.ok) throw new Error(responseData.message || actionName + ' failed');
                
                setGitMsg(actionName + ' completed successfully.', true);
                showMessage(actionName + ' completed successfully.', 'success');
                
                if (responseData.output) {
                    showGitOutput(responseData.output.join('\n'));
                }
                
                return responseData;
            }).catch(err => {
                setGitMsg(err.message, false);
                showMessage(err.message, 'error');
                showGitOutput('Error: ' + err.message);
                throw err;
            });
        }

        // Git Status button
        gitStatusBtn?.addEventListener('click', function() {
            checkGitStatus(false);
        });

        // Git Pull button
        gitPullBtn?.addEventListener('click', function() {
            executeGitAction("{{ route('system.update.git.pull') }}", 'Pulling from remote')
                .then(() => {
                    // Refresh status after pull
                    checkGitStatus(true);
                });
        });

        // Git Commit button
        gitCommitBtn?.addEventListener('click', function() {
            const title = gitCommitTitle.value.trim();
            const message = gitCommitMessage.value.trim();
            
            if (!title) {
                setGitMsg('Please enter a commit title', false);
                return;
            }
            
            executeGitAction("{{ route('system.update.git.commit') }}", 'Committing changes', {
                method: 'POST',
                body: { title, message }
            }).then(() => {
                // Refresh status after commit
                checkGitStatus(true);
            });
        });

        // Git Push button
        gitPushBtn?.addEventListener('click', function() {
            executeGitAction("{{ route('system.update.git.push') }}", 'Pushing to remote')
                .then(() => {
                    // Refresh status after push
                    checkGitStatus(true);
                });
        });

        // Auto-check git status on page load and every 5 seconds
        let gitStatusInterval;
        
        function checkGitStatus(silent = false) {
            if (silent) {
                // Silent check - don't show output or messages
                fetch("{{ route('system.update.git.status') }}", {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'X-CSRF-TOKEN': csrf,
                        'X-System-Update-Key': providedKey
                    }
                }).then(async (res) => {
                    const data = await res.json().catch(() => ({}));
                    if (res.ok) {
                        updateGitStatus(data);
                    }
                }).catch(() => {
                    // Silently fail
                });
            } else {
                executeGitAction("{{ route('system.update.git.status') }}", 'Checking git status')
                    .then(data => {
                        updateGitStatus(data);
                    })
                    .catch(() => {
                        // Silently fail on page load
                    });
            }
        }
        
        document.addEventListener('DOMContentLoaded', function() {
            // Initial check
            checkGitStatus(false);
            
            // Set up automatic checking every 5 seconds
            gitStatusInterval = setInterval(() => {
                checkGitStatus(true);
            }, 5000);
        });
        
        // Clean up interval when page is unloaded
        window.addEventListener('beforeunload', function() {
            if (gitStatusInterval) {
                clearInterval(gitStatusInterval);
            }
        });
    })();
</script>
<script src="{{ mix('/js/tenant.js') }}" defer></script>
</body>
</html>


