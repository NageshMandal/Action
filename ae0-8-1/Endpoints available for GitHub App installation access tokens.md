(w] GitHub Docs Version: Free, Pro, & Team + Search GitHub Docs Qa ® Sign up
= RESTAPI / Authentication / Endpoints for GitHub App installation tokens
Endpoints available for GitHub App
installation access tokens In this article
Your GitHub App can make requests to the following REST actions
endpoints with an installation access token. a
billing
Who can use this feature? branches
AR You can use an installation access token to access these endpoints using your checks
GitHub App. For more information, see "Authenticating as a GitHub App code-scanning
installation.” codes-of-conduct
codespaces
collaborators
commits
actions ¢ copilot
dependabot
® GET /orgs/{org}/actions/cache/usage dependency-graph
® GET /orgs/{org}/actions/cache/usage-by-repository deploy-keys
© GET /orgs/{org}/actions/oidc/customization/sub deployments
e PUT /orgs/{org}/actions/oidc/customization/sub emojis
® GET /orgs/{org}/actions/permissions git
® PUT /orgs/{org}/actions/permissions gitignore
® GET /orgs/{org}/actions/permissions/repositories
® PUT /orgs/{org}/actions/permissions/repositories
© PUT /orgs/{org}/actions/permissions/repositories/{repository_id}
© DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}
® GET /orgs/{org}/actions/permissions/selected-actions
® PUT /orgs/{org}/actions/permissions/selected-actions
© GET /orgs/{org}/actions/permissions/workflow
e PUT /orgs/{org}/actions/permissions/workflow
® GET /orgs/{org}/actions/runners
e GET /orgs/{org}/actions/runners/downloads
® POST /orgs/{org}/actions/runners/generate-jitconfig
® POST /orgs/{org}/actions/runners/registration-token
® POST /orgs/{org}/actions/runners/remove-token
e GET /orgs/{org}/actions/runners/{runner_id}
® DELETE /orgs/{org}/actions/runners/{runner_id}
© GET /orgs/{org}/actions/runners/{runner_id}/labels
© POST /orgs/{org}/actions/runners/{runner_id}/labels
e PUT /orgs/{org}/actions/runners/{runner_id}/labels
© DELETE /orgs/{org}/actions/runners/{runner_id}/labels
e DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}
® GET /orgs/{org}/actions/secrets
® GET /orgs/{org}/actions/secrets/public-key
® GET /orgs/{org}/actions/secrets/{secret_name}
e PUT /orgs/{org}/actions/secrets/{secret_name}
® DELETE /orgs/{org}/actions/secrets/{secret_name}
® GET /orgs/{org}/actions/secrets/{secret_name}/repositories
® PUT /orgs/{org}/actions/secrets/{secret_name}/repositories
e PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}
© DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}
© GET /orgs/{org}/actions/variables
® POST /orgs/{org}/actions/variables
e GET /orgs/{org}/actions/variables/{name}
® PATCH /orgs/{org}/actions/variables/{name}
® DELETE /orgs/{org}/actions/variables/{name}
© GET /orgs/{org}/actions/variables/{name}/repositories
e PUT /orgs/{org}/actions/variables/{name}/repositories
© PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}
e DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}
® GET /repos/{owner}/{repo}/actions/artifacts
© GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}
© DELETE /repos/{ouner}/{repo}/actions/artifacts/{artifact_id}
© GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}
© GET /repos/{owner}/{repo}/actions/cache/usage
© GET /repos/{owner}/{repo}/actions/caches
© DELETE /repos/{owner}/{repo}/actions/caches
© DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}
® GET /repos/{owner}/{repo}/actions/jobs/{job_id}
© GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs
® POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun
© GET /repos/{owner}/{repo}/actions/oidc/customization/sub
© PUT /repos/{owner}/{repo}/actions/oidc/customization/sub
© GET /repos/{owner}/{repo}/actions/organization-secrets
© GET /repos/{owner}/{repo}/actions/organization-variables
© GET /repos/{owner}/{repo}/actions/permissions
© PUT /repos/{owner}/{repo}/actions/permissions
© GET /repos/{owner}/{repo}/actions/permissions/access
© PUT /repos/{owner}/{repo}/actions/permissions/access
© GET /repos/{owner}/{repo}/actions/permissions/selected-actions
© PUT /repos/{owner}/{repo}/actions/permissions/selected-actions
© GET /repos/{owner}/{repo}/actions/permissions/workflow
© PUT /repos/{owner}/{repo}/actions/permissions/workflow
© GET /repos/{owner}/{repo}/actions/runners
© GET /repos/{owner}/{repo}/actions/runners/downloads
© POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig
© POST /repos/{owner}/{repo}/actions/runners/registration-token
© POST /repos/{ouner}/{repo}/actions/runners/remove-token
© GET /repos/{owner}/{repo}/actions/runners/{runner_id}
© DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}
© GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
© POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
© PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
© DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
© DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}
© GET /repos/{owner}/{repo}/actions/runs
® GET /repos/{owner}/{repo}/actions/runs/{run_id}
© DELETE /repos/{owner}/{repo}/actions/runs/{run_id}
® GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals
© POST /repos/{ouner}/{repo}/actions/runs/{run_id}/approve
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs
© POST /repos/{ouner}/{repo}/actions/runs/{run_id}/cancel
© POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule
© POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs
© DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments
© POST /repos/{ouner}/{repo}/actions/runs/{run_id}/pending_deployments
© POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun
© POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing
© GET /repos/{owner}/{repo}/actions/secrets
® GET /repos/{owner}/{repo}/actions/secrets/public-key
© GET /repos/{owner}/{repo}/actions/secrets/{secret_name}
© PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}
© DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}
© GET /repos/{owner}/{repo}/actions/variables
© POST /repos/{ouner}/{repo}/actions/variables
© GET /repos/{owner}/{repo}/actions/variables/{name}
© PATCH /repos/{owner}/{repo}/actions/variables/{name}
© DELETE /repos/{owner}/{repo}/actions/variables/{name}
© GET /repos/{owner}/{repo}/actions/workflows
© GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}
© PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable
© POST /repos/{ouner}/{repo}/actions/workflows/{workflow_id}/dispatches
© PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable
© GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs
© GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing
© GET /repos/{owner}/{repo}/environments/{environment_name}/secrets
© GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key
® GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}
© PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}
© DELETE
/repos/{ouner}/{repo}/environments/{environment_name}/secrets/{secret_name}
© GET /repos/{owner}/{repo}/environments/{environment_name}/variables
© POST /repos/{ouner}/{repo}/environments/{environment_name}/variables
© GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
© PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
© DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
activity ¢
® GET /events
© GET /feeds
© GET /networks/{owner}/{repo}/events
® GET /orgs/{org}/events
© GET /repos/{owner}/{repo}/events
© GET /repos/{owner}/{repo}/stargazers
© GET /repos/{owner}/{repo}/subscribers
© GET /users/{username}/events
® GET /users/{username}/events/public
© GET /users/{username}/received_events
© GET /users/{username}/received_events/public
© GET /users/{username}/starred
© GET /users/{username}/subscriptions
apps ¢@
® GET /apps/{app_slug}
© GET /installation/repositories
© DELETE /installation/token
billing ¢
© GET /orgs/{org}/settings/billing/actions
e GET /orgs/{org}/settings/billing/packages
© GET /orgs/{org}/settings/billing/shared-storage
branches ¢
© GET /repos/{owner}/{repo}/branches
© GET /repos/{owner}/{repo}/branches/{branch}
© GET /repos/{owner}/{repo}/branches/{branch}/protection
© PUT /repos/{owner}/{repo}/branches/{branch}/protection
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection
© GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins
© POST /repos/{ouner}/{repo}/branches/{branch}/protection/enforce_admins
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins
* GET
EE
© PATCH
EE
© DELETE
/repos/{ouner}/{repo}/branches/{branch}/protection/required_pull_request_reviews
© GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
© POST /repos/{ouner}/{repo}/branches/{branch}/protection/required_signatures
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
© GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks
© PATCH /repos/{ouner}/{repo}/branches/{branch}/protection/required_status_checks
© DELETE /repos/{ouner}/{repo}/branches/{branch}/protection/required_status_checks
* GET
Ee ET
* POST
ramos fmm rermoty remiss loreal friar rene, sms meses
e PUT
Ee ET
© DELETE
/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts
© GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions
© GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
© POST /repos/{ouner}/{repo}/branches/{branch}/protection/restrictions/apps
© PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
© GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
POST /repos/{ouner}/{repo}/branches/{branch}/protection/restrictions/teams
© PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
© GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
© POST /repos/{ouner}/{repo}/branches/{branch}/protection/restrictions/users
© PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
© POST /repos/{ouner}/{repo}/branches/{branch}/rename
© POST /repos/{owner}/{repo}/merge-upstream
© POST /repos/{ouner}/{repo}/merges
checks @
© POST /repos/{ouner}/{repo}/check-runs
© GET /repos/{owner}/{repo}/check-runs/{check_run_id}
© PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}
© GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations
© POST /repos/{ouner}/{repo}/check-runs/{check_run_id}/rerequest
© POST /repos/{owner}/{repo}/check-suites
© PATCH /repos/{owner}/{repo}/check-suites/preferences
© GET /repos/{owner}/{repo}/check-suites/{check_suite_id}
© GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs
© POST /repos/{ouner}/{repo}/check-suites/{check_suite_id}/rerequest
© GET /repos/{owner}/{repo}/commits/{ref}/check-runs
© GET /repos/{owner}/{repo}/commits/{ref}/check-suites
code-scanning ¢
® GET /orgs/{org}/code-scanning/alerts
© GET /repos/{owner}/{repo}/code-scanning/alerts
© GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
© PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
© GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances
® GET /repos/{owner}/{repo}/code-scanning/analyses
© GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}
© DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}
© GET /repos/{owner}/{repo}/code-scanning/codeql/databases
© GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}
© POST /repos/{ouner}/{repo}/code-scanning/codeql/variant-analyses
© GET /repos/{owner}/{repo}/code-scanning/codeql/variant-
analyses/{codeql_variant_analysis_id}
© GET /repos/{owner}/{repo}/code-scanning/codeql/variant-
analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}
© GET /repos/{owner}/{repo}/code-scanning/default-setup
© PATCH /repos/{ouner}/{repo}/code-scanning/default-setup
© POST /repos/{owner}/{repo}/code-scanning/sarifs
© GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}
codes-of-conduct ¢
© GET /codes of conduct
* \GElcodesRotRconductficey
codespaces ¢
® GET /orgs/{org}/codespaces
® PUT /orgs/{org}/codespaces/access
® POST /orgs/{org}/codespaces/access/selected users
® DELETE /orgs/{org}/codespaces/access/selected users
® GET /orgs/{org}/codespaces/secrets
® GET /orgs/{org}/codespaces/secrets/public-key
® GET /orgs/{org}/codespaces/secrets/{secret_name}
® PUT /orgs/{org}/codespaces/secrets/{secret_name}
® DELETE /orgs/{org}/codespaces/secrets/{secret_name}
e GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories
® PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories
e PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}
© DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}
© GET /orgs/{org}/members/{username}/codespaces
© DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}
© POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop
© GET /repos/{owner}/{repo}/codespaces/devcontainers
© GET /repos/{owner}/{repo}/codespaces/machines
© GET /repos/{owner}/{repo}/codespaces/secrets
© GET /repos/{owner}/{repo}/codespaces/secrets/public-key
© GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}
© PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}
© DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}
collaborators ¢
© GET /repos/{ouner}/{repo}/collaborators
© GET /repos/{owner}/{repo}/collaborators/{username}
© PUT /repos/{owner}/{repo}/collaborators/{username}
© DELETE /repos/{owner}/{repo}/collaborators/{username}
© GET /repos/{owner}/{repo}/collaborators/{username}/permission
© GET /repos/{owner}/{repo}/invitations
© PATCH /repos/{owner}/{repo}/invitations/{invitation_id}
© DELETE /repos/{owner}/{repo}/invitations/{invitation_id}
commits ¢&
© GET /repos/{owner}/{repo}/comments
® GET /repos/{owner}/{repo}/comments/{comment_id}
© PATCH /repos/{owner}/{repo}/comments/{comment_id}
© DELETE /repos/{owner}/{repo}/comments/{comment_id}
© GET /repos/{owner}/{repo}/commits
© GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head
© GET /repos/{owner}/{repo}/commits/{commit_sha}/comments
© POST /repos/{ouner}/{repo}/commits/{commit_sha}/comments
© GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls
© GET /repos/{owner}/{repo}/commits/{ref}
© GET /repos/{owner}/{repo}/commits/{ref}/status
® GET /repos/{owner}/{repo}/commits/{ref}/statuses
© GET /repos/{owner}/{repo}/compare/{basehead}
© POST /repos/{owner}/{repo}/statuses/{sha}
copilot @
® GET /orgs/{org}/copilot/billing
® GET /orgs/{org}/copilot/billing/seats
® POST /orgs/{org}/copilot/billing/selected teams
® DELETE /orgs/{org}/copilot/billing/selected teams
® POST /orgs/{org}/copilot/billing/selected users
® DELETE /orgs/{org}/copilot/billing/selected users
® GET /orgs/{org}/copilot/usage
® GET /orgs/{org}/members/{username}/copilot
dependabot ¢
® GET /orgs/{org}/dependabot/alerts
® GET /orgs/{org}/dependabot/secrets
® GET /orgs/{org}/dependabot/secrets/public-key
® GET /orgs/{org}/dependabot/secrets/{secret_name}
® PUT /orgs/{org}/dependabot/secrets/{secret_name}
® DELETE /orgs/{org}/dependabot/secrets/{secret_name}
© GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories
© PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories
© PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}
© DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}
© GET /repos/{owner}/{repo}/dependabot/alerts
© GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}
© PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}
© GET /repos/{owner}/{repo}/dependabot/secrets
© GET /repos/{owner}/{repo}/dependabot/secrets/public-key
© GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}
© PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}
© DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}
dependency-graph ¢
© \GElicepos/ionnenlikepoldependencysgLaphconpae i{baschead)
© GET /repos/{ouner}/{repo}/dependency-graph/sbom
* \BoSiinenosyi{oanen/Genalydependencyzgtaphsnapshots)
deploy-keys ¢
© GET /repos/{owner}/{repo}/keys
e POST /repos/{owner}/{repo}/keys
© GET /repos/{owner}/{repo}/keys/{key_id}
© DELETE /repos/{owner}/{repo}/keys/{key_id}
deployments ¢
© GET /repos/{owner}/{repo}/deployments
© POST /repos/{ouner}/{repo}/deployments
© GET /repos/{owner}/{repo}/deployments/{deployment_id}
© DELETE /repos/{owner}/{repo}/deployments/{deployment_id}
© GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses
© POST /repos/{ouner}/{repo}/deployments/{deployment_id}/statuses
© GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}
© GET /repos/{owner}/{repo}/environments
© GET /repos/{owner}/{repo}/environments/{environment_name}
© PUT /repos/{owner}/{repo}/environments/{environment_name}
© DELETE /repos/{owner}/{repo}/environments/{environment_name}
© GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-
policies
© POST /repos/{ouner}/{repo}/environments/{environment_name}/deployment-branch-
policies
© GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-
policies/{branch_policy_id}
© PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-
policies/{branch_policy_id}
© DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-
policies/{branch_policy_id}
* GET
EE
* POST
EE
* GET
ramos fmm rere eames En ra: mE dss: ries miles]
pps.
o GET
ros fier rere em Aramis En Arrant. merely me: res. mls]
protection_rule_id}
© DELETE
/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{
protection_rule_id}
emojis @
© GET /emojis
git @
© POST /repos/{owner}/{repo}/git/blobs
© GET /repos/{owner}/{repo}/git/blobs/{file_sha}
© POST /repos/{owner}/{repo}/git/commits
© GET /repos/{owner}/{repo}/git/commits/{commit_sha}
© GET /repos/{owner}/{repo}/git/matching-refs/{ref}
© GET /repos/{owner}/{repo}/git/ref/{ref}
© POST /repos/{owner}/{repo}/git/refs
© PATCH /repos/{owner}/{repo}/git/refs/{ref}
© DELETE /repos/{owner}/{repo}/git/refs/{ref}
© POST /repos/{owner}/{repo}/git/tags
© GET /repos/{owner}/{repo}/git/tags/{tag sha}
© POST /repos/{owner}/{repo}/git/trees
© GET /repos/{owner}/{repo}/git/trees/{tree_sha}
gitignore ¢
© GET /gitignore/templates
e GET /gitignore/templates/{name}
interactions ¢
© GET /orgs/{org}/interaction-limits
© PUT /orgs/{org}/interaction-limits
® DELETE /orgs/{org}/interaction-limits
© GET /repos/{owner}/{repo}/interaction-limits
© PUT /repos/{owner}/{repo}/interaction-limits
© DELETE /repos/{owner}/{repo}/interaction-limits
issues
® GET /repos/{owner}/{repo}/assignees
© GET /repos/{owner}/{repo}/assignees/{assignee}
© GET /repos/{owner}/{repo}/issues
© POST /repos/{owner}/{repo}/issues
© GET /repos/{owner}/{repo}/issues/comments
© GET /repos/{owner}/{repo}/issues/comments/{comment_id}
© PATCH /repos/{owner}/{repo}/issues/comments/{comment_id}
© DELETE /repos/{owner}/{repo}/issues/comments/{comment_id}
© GET /repos/{owner}/{repo}/issues/events
© GET /repos/{owner}/{repo}/issues/events/{event_id}
® GET /repos/{owner}/{repo}/issues/{issue_number}
© PATCH /repos/{owner}/{repo}/issues/{issue_number}
© POST /repos/{ouner}/{repo}/issues/{issue_number}/assignees
© DELETE /repos/{owner}/{repo}/issues/{issue_number}/assignees
© GET /repos/{owner}/{repo}/issues/{issue_number}/assignees/{assignee}
© GET /repos/{owner}/{repo}/issues/{issue_number}/comments
© POST /repos/{owner}/{repo}/issues/{issue_number}/comments
© GET /repos/{owner}/{repo}/issues/{issue_number}/events
® GET /repos/{owner}/{repo}/issues/{issue_number}/labels
© POST /repos/{ouner}/{repo}/issues/{issue_number}/labels
® PUT /repos/{owner}/{repo}/issues/{issue_number}/labels
© DELETE /repos/{owner}/{repo}/issues/{issue_number}/labels
(w] GitHub Docs Version: Free, Pro, & Team + Search GitHub Docs Qa ® Sign up
= RESTAPI / Authentication / Endpoints for GitHub App installation tokens
Endpoints available for GitHub App
installation access tokens In this article
Your GitHub App can make requests to the following REST actions
endpoints with an installation access token. a
billing
Who can use this feature? branches
AR You can use an installation access token to access these endpoints using your checks
GitHub App. For more information, see "Authenticating as a GitHub App code-scanning
installation.” codes-of-conduct
codespaces
collaborators
commits
actions ¢ copilot
dependabot
© \GEl¥/anes/ioGel/actions/cache/Usage] dependency-graph
© GET /ores/{org}/actions/cache/usage-by repository deploy-keys
© \GEl/ane s/o actTons [oidc/custon ization /sub deployments
© PUT Jores/{org}/actions/oldc/custonization/sub emojis
© \GEl¥/anes/i{oGe actions [pensions] git
© PUT Jores/{org}/actions/permissions gitignore
® GET /orgs/{org}/actions/permissions/repositories
® PUT /orgs/{org}/actions/permissions/repositories
© PUT /orgs/{org}/actions/permissions/repositories/{repository_id}
© DELETE /orgs/{org}/actions/permissions/repositories/{repository_id}
® GET /orgs/{org}/actions/permissions/selected-actions
® PUT /orgs/{org}/actions/permissions/selected-actions
© GET /orgs/{org}/actions/permissions/workflow
e PUT /orgs/{org}/actions/permissions/workflow
® GET /orgs/{org}/actions/runners
e GET /orgs/{org}/actions/runners/downloads
® POST /orgs/{org}/actions/runners/generate-jitconfig
® POST /orgs/{org}/actions/runners/registration-token
® POST /orgs/{org}/actions/runners/remove-token
e GET /orgs/{org}/actions/runners/{runner_id}
® DELETE /orgs/{org}/actions/runners/{runner_id}
© GET /orgs/{org}/actions/runners/{runner_id}/labels
© POST /orgs/{org}/actions/runners/{runner_id}/labels
e PUT /orgs/{org}/actions/runners/{runner_id}/labels
© DELETE /orgs/{org}/actions/runners/{runner_id}/labels
e DELETE /orgs/{org}/actions/runners/{runner_id}/labels/{name}
® GET /orgs/{org}/actions/secrets
® GET /orgs/{org}/actions/secrets/public-key
® GET /orgs/{org}/actions/secrets/{secret_name}
e PUT /orgs/{org}/actions/secrets/{secret_name}
® DELETE /orgs/{org}/actions/secrets/{secret_name}
® GET /orgs/{org}/actions/secrets/{secret_name}/repositories
® PUT /orgs/{org}/actions/secrets/{secret_name}/repositories
e PUT /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}
© DELETE /orgs/{org}/actions/secrets/{secret_name}/repositories/{repository_id}
© GET /orgs/{org}/actions/variables
® POST /orgs/{org}/actions/variables
e GET /orgs/{org}/actions/variables/{name}
® PATCH /orgs/{org}/actions/variables/{name}
® DELETE /orgs/{org}/actions/variables/{name}
© GET /orgs/{org}/actions/variables/{name}/repositories
e PUT /orgs/{org}/actions/variables/{name}/repositories
© PUT /orgs/{org}/actions/variables/{name}/repositories/{repository_id}
e DELETE /orgs/{org}/actions/variables/{name}/repositories/{repository_id}
® GET /repos/{owner}/{repo}/actions/artifacts
© GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}
© DELETE /repos/{ouner}/{repo}/actions/artifacts/{artifact_id}
© GET /repos/{owner}/{repo}/actions/artifacts/{artifact_id}/{archive_format}
© GET /repos/{owner}/{repo}/actions/cache/usage
© GET /repos/{owner}/{repo}/actions/caches
© DELETE /repos/{owner}/{repo}/actions/caches
© DELETE /repos/{owner}/{repo}/actions/caches/{cache_id}
® GET /repos/{owner}/{repo}/actions/jobs/{job_id}
© GET /repos/{owner}/{repo}/actions/jobs/{job_id}/logs
® POST /repos/{owner}/{repo}/actions/jobs/{job_id}/rerun
© GET /repos/{owner}/{repo}/actions/oidc/customization/sub
© PUT /repos/{owner}/{repo}/actions/oidc/customization/sub
© GET /repos/{owner}/{repo}/actions/organization-secrets
© GET /repos/{owner}/{repo}/actions/organization-variables
© GET /repos/{owner}/{repo}/actions/permissions
© PUT /repos/{owner}/{repo}/actions/permissions
© GET /repos/{owner}/{repo}/actions/permissions/access
© PUT /repos/{owner}/{repo}/actions/permissions/access
© GET /repos/{owner}/{repo}/actions/permissions/selected-actions
© PUT /repos/{owner}/{repo}/actions/permissions/selected-actions
© GET /repos/{owner}/{repo}/actions/permissions/workflow
© PUT /repos/{owner}/{repo}/actions/permissions/workflow
© GET /repos/{owner}/{repo}/actions/runners
© GET /repos/{owner}/{repo}/actions/runners/downloads
© POST /repos/{owner}/{repo}/actions/runners/generate-jitconfig
© POST /repos/{owner}/{repo}/actions/runners/registration-token
© POST /repos/{ouner}/{repo}/actions/runners/remove-token
© GET /repos/{owner}/{repo}/actions/runners/{runner_id}
© DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}
© GET /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
© POST /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
© PUT /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
© DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels
© DELETE /repos/{owner}/{repo}/actions/runners/{runner_id}/labels/{name}
© GET /repos/{owner}/{repo}/actions/runs
® GET /repos/{owner}/{repo}/actions/runs/{run_id}
© DELETE /repos/{owner}/{repo}/actions/runs/{run_id}
® GET /repos/{owner}/{repo}/actions/runs/{run_id}/approvals
© POST /repos/{ouner}/{repo}/actions/runs/{run_id}/approve
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/artifacts
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/jobs
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}/logs
© POST /repos/{ouner}/{repo}/actions/runs/{run_id}/cancel
© POST /repos/{owner}/{repo}/actions/runs/{run_id}/deployment_protection_rule
© POST /repos/{owner}/{repo}/actions/runs/{run_id}/force-cancel
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/jobs
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs
© DELETE /repos/{owner}/{repo}/actions/runs/{run_id}/logs
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/pending_deployments
© POST /repos/{ouner}/{repo}/actions/runs/{run_id}/pending_deployments
© POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun
© POST /repos/{owner}/{repo}/actions/runs/{run_id}/rerun-failed-jobs
© GET /repos/{owner}/{repo}/actions/runs/{run_id}/timing
© GET /repos/{owner}/{repo}/actions/secrets
® GET /repos/{owner}/{repo}/actions/secrets/public-key
© GET /repos/{owner}/{repo}/actions/secrets/{secret_name}
© PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}
© DELETE /repos/{owner}/{repo}/actions/secrets/{secret_name}
© GET /repos/{owner}/{repo}/actions/variables
© POST /repos/{ouner}/{repo}/actions/variables
© GET /repos/{owner}/{repo}/actions/variables/{name}
© PATCH /repos/{owner}/{repo}/actions/variables/{name}
© DELETE /repos/{owner}/{repo}/actions/variables/{name}
© GET /repos/{owner}/{repo}/actions/workflows
© GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}
© PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/disable
© POST /repos/{ouner}/{repo}/actions/workflows/{workflow_id}/dispatches
© PUT /repos/{owner}/{repo}/actions/workflows/{workflow_id}/enable
© GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs
© GET /repos/{owner}/{repo}/actions/workflows/{workflow_id}/timing
© GET /repos/{owner}/{repo}/environments/{environment_name}/secrets
© GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/public-key
® GET /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}
© PUT /repos/{owner}/{repo}/environments/{environment_name}/secrets/{secret_name}
© DELETE
/repos/{ouner}/{repo}/environments/{environment_name}/secrets/{secret_name}
© GET /repos/{owner}/{repo}/environments/{environment_name}/variables
© POST /repos/{ouner}/{repo}/environments/{environment_name}/variables
© GET /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
© PATCH /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
© DELETE /repos/{owner}/{repo}/environments/{environment_name}/variables/{name}
activity ¢
® GET /events
© GET /feeds
© GET /networks/{owner}/{repo}/events
® GET /orgs/{org}/events
© GET /repos/{owner}/{repo}/events
© GET /repos/{owner}/{repo}/stargazers
© GET /repos/{owner}/{repo}/subscribers
© GET /users/{username}/events
® GET /users/{username}/events/public
© GET /users/{username}/received_events
© GET /users/{username}/received_events/public
© GET /users/{username}/starred
© GET /users/{username}/subscriptions
apps ¢@
® GET /apps/{app_slug}
© GET /installation/repositories
© DELETE /installation/token
billing ¢
© GET /orgs/{org}/settings/billing/actions
e GET /orgs/{org}/settings/billing/packages
© GET /orgs/{org}/settings/billing/shared-storage
branches ¢
© GET /repos/{owner}/{repo}/branches
© GET /repos/{owner}/{repo}/branches/{branch}
© GET /repos/{owner}/{repo}/branches/{branch}/protection
© PUT /repos/{owner}/{repo}/branches/{branch}/protection
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection
© GET /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins
© POST /repos/{ouner}/{repo}/branches/{branch}/protection/enforce_admins
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/enforce_admins
* GET
EE
© PATCH
EE
© DELETE
/repos/{ouner}/{repo}/branches/{branch}/protection/required_pull_request_reviews
© GET /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
© POST /repos/{ouner}/{repo}/branches/{branch}/protection/required_signatures
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/required_signatures
© GET /repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks
© PATCH /repos/{ouner}/{repo}/branches/{branch}/protection/required_status_checks
© DELETE /repos/{ouner}/{repo}/branches/{branch}/protection/required_status_checks
* GET
Ee ET
* POST
ramos fmm rermoty remiss loreal friar rene, sms meses
e PUT
Ee ET
© DELETE
/repos/{owner}/{repo}/branches/{branch}/protection/required_status_checks/contexts
© GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions
© GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
© POST /repos/{ouner}/{repo}/branches/{branch}/protection/restrictions/apps
© PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/apps
© GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
POST /repos/{ouner}/{repo}/branches/{branch}/protection/restrictions/teams
© PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/teams
© GET /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
© POST /repos/{ouner}/{repo}/branches/{branch}/protection/restrictions/users
© PUT /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
© DELETE /repos/{owner}/{repo}/branches/{branch}/protection/restrictions/users
© POST /repos/{ouner}/{repo}/branches/{branch}/rename
© POST /repos/{owner}/{repo}/merge-upstream
© POST /repos/{ouner}/{repo}/merges
checks @
© POST /repos/{ouner}/{repo}/check-runs
© GET /repos/{owner}/{repo}/check-runs/{check_run_id}
© PATCH /repos/{owner}/{repo}/check-runs/{check_run_id}
© GET /repos/{owner}/{repo}/check-runs/{check_run_id}/annotations
© POST /repos/{ouner}/{repo}/check-runs/{check_run_id}/rerequest
© POST /repos/{owner}/{repo}/check-suites
© PATCH /repos/{owner}/{repo}/check-suites/preferences
© GET /repos/{owner}/{repo}/check-suites/{check_suite_id}
© GET /repos/{owner}/{repo}/check-suites/{check_suite_id}/check-runs
© POST /repos/{ouner}/{repo}/check-suites/{check_suite_id}/rerequest
© GET /repos/{owner}/{repo}/commits/{ref}/check-runs
© GET /repos/{owner}/{repo}/commits/{ref}/check-suites
code-scanning ¢
® GET /orgs/{org}/code-scanning/alerts
© GET /repos/{owner}/{repo}/code-scanning/alerts
© GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
© PATCH /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}
© GET /repos/{owner}/{repo}/code-scanning/alerts/{alert_number}/instances
® GET /repos/{owner}/{repo}/code-scanning/analyses
© GET /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}
© DELETE /repos/{owner}/{repo}/code-scanning/analyses/{analysis_id}
© GET /repos/{owner}/{repo}/code-scanning/codeql/databases
© GET /repos/{owner}/{repo}/code-scanning/codeql/databases/{language}
© POST /repos/{ouner}/{repo}/code-scanning/codeql/variant-analyses
© GET /repos/{owner}/{repo}/code-scanning/codeql/variant-
analyses/{codeql_variant_analysis_id}
© GET /repos/{owner}/{repo}/code-scanning/codeql/variant-
analyses/{codeql_variant_analysis_id}/repos/{repo_owner}/{repo_name}
© GET /repos/{owner}/{repo}/code-scanning/default-setup
© PATCH /repos/{ouner}/{repo}/code-scanning/default-setup
© POST /repos/{owner}/{repo}/code-scanning/sarifs
© GET /repos/{owner}/{repo}/code-scanning/sarifs/{sarif_id}
codes-of-conduct ¢
© GET /codes of conduct
* \GElcodesRotRconductficey
codespaces ¢
® GET /orgs/{org}/codespaces
® PUT /orgs/{org}/codespaces/access
® POST /orgs/{org}/codespaces/access/selected users
® DELETE /orgs/{org}/codespaces/access/selected users
® GET /orgs/{org}/codespaces/secrets
® GET /orgs/{org}/codespaces/secrets/public-key
® GET /orgs/{org}/codespaces/secrets/{secret_name}
® PUT /orgs/{org}/codespaces/secrets/{secret_name}
® DELETE /orgs/{org}/codespaces/secrets/{secret_name}
e GET /orgs/{org}/codespaces/secrets/{secret_name}/repositories
® PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories
e PUT /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}
© DELETE /orgs/{org}/codespaces/secrets/{secret_name}/repositories/{repository_id}
© GET /orgs/{org}/members/{username}/codespaces
© DELETE /orgs/{org}/members/{username}/codespaces/{codespace_name}
© POST /orgs/{org}/members/{username}/codespaces/{codespace_name}/stop
© GET /repos/{owner}/{repo}/codespaces/devcontainers
© GET /repos/{owner}/{repo}/codespaces/machines
© GET /repos/{owner}/{repo}/codespaces/secrets
© GET /repos/{owner}/{repo}/codespaces/secrets/public-key
© GET /repos/{owner}/{repo}/codespaces/secrets/{secret_name}
© PUT /repos/{owner}/{repo}/codespaces/secrets/{secret_name}
© DELETE /repos/{owner}/{repo}/codespaces/secrets/{secret_name}
collaborators ¢
© GET /repos/{ouner}/{repo}/collaborators
© GET /repos/{owner}/{repo}/collaborators/{username}
© PUT /repos/{owner}/{repo}/collaborators/{username}
© DELETE /repos/{owner}/{repo}/collaborators/{username}
© GET /repos/{owner}/{repo}/collaborators/{username}/permission
© GET /repos/{owner}/{repo}/invitations
© PATCH /repos/{owner}/{repo}/invitations/{invitation_id}
© DELETE /repos/{owner}/{repo}/invitations/{invitation_id}
commits ¢&
© GET /repos/{owner}/{repo}/comments
® GET /repos/{owner}/{repo}/comments/{comment_id}
© PATCH /repos/{owner}/{repo}/comments/{comment_id}
© DELETE /repos/{owner}/{repo}/comments/{comment_id}
© GET /repos/{owner}/{repo}/commits
© GET /repos/{owner}/{repo}/commits/{commit_sha}/branches-where-head
© GET /repos/{owner}/{repo}/commits/{commit_sha}/comments
© POST /repos/{ouner}/{repo}/commits/{commit_sha}/comments
© GET /repos/{owner}/{repo}/commits/{commit_sha}/pulls
© GET /repos/{owner}/{repo}/commits/{ref}
© GET /repos/{owner}/{repo}/commits/{ref}/status
® GET /repos/{owner}/{repo}/commits/{ref}/statuses
© GET /repos/{owner}/{repo}/compare/{basehead}
© POST /repos/{owner}/{repo}/statuses/{sha}
copilot @
® GET /orgs/{org}/copilot/billing
® GET /orgs/{org}/copilot/billing/seats
® POST /orgs/{org}/copilot/billing/selected teams
® DELETE /orgs/{org}/copilot/billing/selected teams
® POST /orgs/{org}/copilot/billing/selected users
® DELETE /orgs/{org}/copilot/billing/selected users
® GET /orgs/{org}/copilot/usage
® GET /orgs/{org}/members/{username}/copilot
dependabot ¢
® GET /orgs/{org}/dependabot/alerts
® GET /orgs/{org}/dependabot/secrets
® GET /orgs/{org}/dependabot/secrets/public-key
® GET /orgs/{org}/dependabot/secrets/{secret_name}
® PUT /orgs/{org}/dependabot/secrets/{secret_name}
® DELETE /orgs/{org}/dependabot/secrets/{secret_name}
© GET /orgs/{org}/dependabot/secrets/{secret_name}/repositories
© PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories
© PUT /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}
© DELETE /orgs/{org}/dependabot/secrets/{secret_name}/repositories/{repository_id}
© GET /repos/{owner}/{repo}/dependabot/alerts
© GET /repos/{owner}/{repo}/dependabot/alerts/{alert_number}
© PATCH /repos/{owner}/{repo}/dependabot/alerts/{alert_number}
© GET /repos/{owner}/{repo}/dependabot/secrets
© GET /repos/{owner}/{repo}/dependabot/secrets/public-key
© GET /repos/{owner}/{repo}/dependabot/secrets/{secret_name}
© PUT /repos/{owner}/{repo}/dependabot/secrets/{secret_name}
© DELETE /repos/{owner}/{repo}/dependabot/secrets/{secret_name}
dependency-graph ¢
© GET /repos/{owner}/{repo}/dependency-graph/compare/{basehead}
© GET /repos/{owner}/{repo}/dependency-graph/sbom
© POST /repos/{ouner}/{repo}/dependency-graph/snapshots
deploy-keys ¢
© GET /repos/{owner}/{repo}/keys
e POST /repos/{owner}/{repo}/keys
© GET /repos/{owner}/{repo}/keys/{key_id}
© DELETE /repos/{owner}/{repo}/keys/{key_id}
deployments ¢
© GET /repos/{owner}/{repo}/deployments
© POST /repos/{ouner}/{repo}/deployments
© GET /repos/{owner}/{repo}/deployments/{deployment_id}
© DELETE /repos/{owner}/{repo}/deployments/{deployment_id}
© GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses
© POST /repos/{ouner}/{repo}/deployments/{deployment_id}/statuses
© GET /repos/{owner}/{repo}/deployments/{deployment_id}/statuses/{status_id}
© GET /repos/{owner}/{repo}/environments
© GET /repos/{owner}/{repo}/environments/{environment_name}
© PUT /repos/{owner}/{repo}/environments/{environment_name}
© DELETE /repos/{owner}/{repo}/environments/{environment_name}
© GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-
policies
© POST /repos/{ouner}/{repo}/environments/{environment_name}/deployment-branch-
policies
© GET /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-
policies/{branch_policy_id}
© PUT /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-
policies/{branch_policy_id}
© DELETE /repos/{owner}/{repo}/environments/{environment_name}/deployment-branch-
policies/{branch_policy_id}
* GET
EE
* POST
EE
* GET
ramos fmm rere eames En ra: mE dss: ries miles]
pps.
o GET
ros fier rere em Aramis En Arrant. merely me: res. mls]
protection_rule_id}
© DELETE
/repos/{owner}/{repo}/environments/{environment_name}/deployment_protection_rules/{
protection_rule_id}
emojis @
© GET /emojis
git @
© POST /repos/{owner}/{repo}/git/blobs
© GET /repos/{owner}/{repo}/git/blobs/{file_sha}
© POST /repos/{owner}/{repo}/git/commits
© GET /repos/{owner}/{repo}/git/commits/{commit_sha}
© GET /repos/{owner}/{repo}/git/matching-refs/{ref}
© GET /repos/{owner}/{repo}/git/ref/{ref}
© POST /repos/{owner}/{repo}/git/refs
© PATCH /repos/{owner}/{repo}/git/refs/{ref}
© DELETE /repos/{owner}/{repo}/git/refs/{ref}
© POST /repos/{owner}/{repo}/git/tags
© GET /repos/{owner}/{repo}/git/tags/{tag sha}
© POST /repos/{owner}/{repo}/git/trees
© GET /repos/{owner}/{repo}/git/trees/{tree_sha}
gitignore ¢
© GET /gitignore/templates
e GET /gitignore/templates/{name}
interactions ¢
© GET /orgs/{org}/interaction-limits
© PUT /orgs/{org}/interaction-limits
