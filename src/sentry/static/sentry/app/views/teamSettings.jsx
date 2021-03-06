import React from 'react';

import {ApiForm, TextField} from '../components/forms';
import {t} from '../locale';

export default React.createClass({
  propTypes: {
    team: React.PropTypes.object.isRequired,
    onTeamChange: React.PropTypes.func.isRequired
  },

  render() {
    let {orgId, teamId} = this.props.params;
    let team = this.props.team;

    return (
      <div>
        <div className="box">
          <div className="box-content with-padding">
            <ApiForm
              apiMethod="PUT"
              apiEndpoint={`/teams/${orgId}/${teamId}/`}
              initialData={{
                name: team.name,
                slug: team.slug
              }}
              onSubmitSuccess={this.props.onTeamChange}
              fields={[
                {
                  name: 'name',
                  label: t('Name'),
                  placeholder: t('e.g. API Team'),
                  required: true,
                  component: TextField
                },
                {
                  name: 'slug',
                  label: t('Short name'),
                  placeholder: t('e.g. api-team'),
                  required: true,
                  component: TextField
                }
              ]}
            />
          </div>
        </div>
      </div>
    );
  }
});
